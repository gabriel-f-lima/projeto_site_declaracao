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
    # Pegamos do arquivo .env para não deixar senhas expostas no código!
    email_remetente = os.getenv("EMAIL_USER")
    senha_app = os.getenv("EMAIL_PASS")
    
    if not email_remetente or not senha_app:
        print("ERRO: E-mail ou Senha não configurados no .env")
        return False

    msg = MIMEText(f"Seu código de acesso para a Lovyc é: {codigo}\n\nUse este código para entrar na sua conta.")
    msg['Subject'] = 'Seu código de login - Lovyc'
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

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)