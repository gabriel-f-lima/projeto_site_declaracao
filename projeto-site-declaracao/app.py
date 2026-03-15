import os
from flask import Flask, render_template
from models import db, Homenagem
from dotenv import load_dotenv

load_dotenv()

def create_app():
    app = Flask(__name__) 
    
    # LINHA MUDADA AQUI:
    db_url = os.getenv("DB_URL", "sqlite:///test.db")
    if db_url.startswith("postgres://"):
        db_url = db_url.replace("postgres://", "postgresql://", 1)
    
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    with app.app_context():
        db.create_all()

    @app.route('/')
    def home():
        return render_template('index.html')
    
    @app.route('/presentes')
    def presentes():
        return render_template('presente.html')
    
    @app.route('/criar')
    def criar_homenagem():
        return render_template('criar_homenagem.html')
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)