from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv
from urllib.parse import quote_plus

# Charger les variables d'environnement depuis le .env
load_dotenv()

# Récupération et encodage du mot de passe
user = os.getenv("POSTGRES_USER", "root")
password = quote_plus(os.getenv("POSTGRES_PASSWORD", "root1A@"))
host = os.getenv("POSTGRES_HOST", "localhost")
port = os.getenv("POSTGRES_PORT", "5432")
db = os.getenv("POSTGRES_DB", "gestocol")

# Construction de l'URL compatible SQLAlchemy
# DATABASE_URL = f"postgresql://{user}:{password}@{host}:{port}/{db}"

# Création de l'engine
# engine = create_engine(DATABASE_URL, pool_pre_ping=True)

# from sqlalchemy import create_engine

DATABASE_URL = "postgresql+psycopg2://root:root1A%40@127.0.0.1:5432/gestocol"
engine = create_engine(DATABASE_URL)


# Fabrique de sessions
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base déclarative pour tes modèles
Base = declarative_base()
