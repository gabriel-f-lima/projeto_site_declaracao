from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone

db = SQLAlchemy()

class Homenagem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    slug = db.Column(db.String(50), unique=True, nullable=False)
    remetente = db.Column(db.String(100))
    destinatario = db.Column(db.String(100))
    mensagem = db.Column(db.Text)
    data_inicio = db.Column(db.Date)
    plano = db.Column(db.String(20)) # 'semana' ou 'permanente'
    pago = db.Column(db.Boolean, default=False) 
    data_criacao = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    data_expiracao = db.Column(db.DateTime, nullable=True)

# ==========================================
# NOVAS TABELAS PARA O LOGIN
# ==========================================
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    data_criacao = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    
    # Opcional: Se quiser vincular a Homenagem ao Usuário no futuro
    # homenagens = db.relationship('Homenagem', backref='autor', lazy=True)

class VerificationCode(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), nullable=False)
    codigo = db.Column(db.String(6), nullable=False)
    data_criacao = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))