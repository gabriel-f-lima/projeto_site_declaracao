import os
import random
import smtplib
from email.mime.text import MIMEText
from flask import Flask, render_template, request, jsonify, session
from models import db, Homenagem, User, VerificationCode # Importamos os novos modelos
from dotenv import load_dotenv

load_dotenv()

# ==========================================
# FUNÇÃO PARA ENVIAR E-MAIL
# ==========================================
def enviar_email_codigo(email_destino, codigo):
    email_remetente = os.getenv("EMAIL_USER")
    senha_app = os.getenv("EMAIL_PASS")
    
    if not email_remetente or not senha_app:
        print("ERRO: E-mail ou Senha não configurados no .env")
        return False

    # 1. Criamos um template HTML bonitão para o e-mail
    html = f"""
    <html>
      <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px;">
        
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #6c5ce7; margin: 0;">Lovyc</h1>
        </div>
        
        <p style="font-size: 16px;">Olá!</p>
        
        <p style="font-size: 16px;">Recebemos um pedido para acessar a sua conta. Use o código de verificação abaixo para confirmar seu login:</p>
        
        <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 20px; text-align: center; border-radius: 8px; margin: 30px 0;">
            <span style="font-size: 36px; font-weight: bold; color: #1e1e24; letter-spacing: 8px;">{codigo}</span>
        </div>
        
        <p style="font-size: 14px; color: #666;">Se você não solicitou este acesso, não se preocupe, basta ignorar este e-mail. Sua conta está segura.</p>
        
        <hr style="border: none; border-top: 1px solid #eaeaea; margin: 30px 0;">
        
        <p style="font-size: 12px; color: #999; text-align: center;">
            Feito com ❤️ pela equipe Lovyc<br>
            Este é um e-mail automático, por favor não responda.
        </p>
        
      </body>
    </html>
    """

    # 2. Alteramos o MIMEText para dizer que agora é um HTML ('html', 'utf-8')
    msg = MIMEText(html, 'html', 'utf-8')
    msg['Subject'] = 'Seu código de acesso - Lovyc 💜'
    msg['From'] = email_remetente
    msg['To'] = email_destino
    try:
        # Usando a porta 587 com STARTTLS (melhor para Render/Hospedagens)
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls() 
        server.login(email_remetente, senha_app)
        server.sendmail(email_remetente, email_destino, msg.as_string())
        server.quit()
        return True
    except Exception as e:
        print(f"Erro ao enviar e-mail: {e}")
        return False


def create_app():
    app = Flask(__name__) 
    
    # IMPORTANTE: Necessário para salvar o login (session) do usuário
    app.secret_key = os.getenv("SECRET_KEY", "chave_secreta_padrao_para_desenvolvimento")
    
    # Configuração do Banco de Dados
    db_url = os.getenv("DB_URL", "sqlite:///test.db")
    if db_url.startswith("postgres://"):
        db_url = db_url.replace("postgres://", "postgresql://", 1)
    
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    with app.app_context():
        db.create_all()

    # ==========================================
    # ROTAS DAS PÁGINAS
    # ==========================================
    @app.route('/')
    def home():
        return render_template('index.html')
    
    @app.route('/presentes')
    def presentes():
        return render_template('presente.html')
    
    @app.route('/criar')
    def criar_homenagem():
        return render_template('criar_homenagem.html')

    # ==========================================
    # ROTAS DA API DE LOGIN
    # ==========================================
    @app.route('/api/login/enviar-codigo', methods=['POST'])
    def api_enviar_codigo():
        dados = request.get_json()
        email = dados.get('email')

        if not email:
            return jsonify({"erro": "Email inválido"}), 400

        codigo_gerado = str(random.randint(100000, 999999))

        VerificationCode.query.filter_by(email=email).delete()
        novo_codigo = VerificationCode(email=email, codigo=codigo_gerado)
        db.session.add(novo_codigo)
        db.session.commit()

        if enviar_email_codigo(email, codigo_gerado):
            return jsonify({"mensagem": "Código enviado com sucesso!"}), 200
        else:
            db.session.delete(novo_codigo)
            db.session.commit()
            return jsonify({"erro": "Falha ao enviar e-mail. Verifique o console."}), 500

    @app.route('/api/login/verificar', methods=['POST'])
    def api_verificar_codigo():
        dados = request.get_json()
        email = dados.get('email')
        codigo_digitado = dados.get('codigo')

        registro = VerificationCode.query.filter_by(email=email, codigo=codigo_digitado).first()

        if registro:
            user = User.query.filter_by(email=email).first()
            if not user:
                user = User(email=email)
                db.session.add(user)
                db.session.commit()
            
            db.session.delete(registro)
            db.session.commit()

            # Salva o usuário logado no navegador
            session['user_id'] = user.id
            session['user_email'] = user.email

            return jsonify({"mensagem": "Login efetuado!"}), 200
            
        return jsonify({"erro": "Código inválido ou expirado"}), 400

    # ==========================================
    # ROTAS DE SESSÃO (STATUS E LOGOUT)
    # ==========================================
    @app.route('/api/auth/status', methods=['GET'])
    def check_status():
            # Verifica se o usuário tem uma sessão ativa
        if 'user_id' in session:
            return jsonify({
                "logado": True, 
                "email": session.get('user_email')
            }), 200
            
        return jsonify({"logado": False}), 200

    
    @app.route('/api/auth/sair', methods=['POST'])
    def fazer_logout():
        session.clear() # Apaga o cookie e desloga o usuário
        return jsonify({"mensagem": "Deslogado com sucesso!"}), 200
    
    return app

# ==========================================
# INICIAR O SERVIDOR
# ==========================================
if __name__ == '__main__':
    app = create_app()
    # O Render injeta a porta correta aqui. Se for local, usa 5000.
    port = int(os.environ.get("PORT", 5000))
    # O host="0.0.0.0" é obrigatório para a internet conseguir acessar sua API
    app.run(host="0.0.0.0", port=port, debug=True)