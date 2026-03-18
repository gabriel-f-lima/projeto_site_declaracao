from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone # Importe timezone

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
    
    # AJUSTE AQUI: Use uma função lambda para pegar a hora atual corretamente
    data_criacao = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    data_expiracao = db.Column(db.DateTime, nullable=True)