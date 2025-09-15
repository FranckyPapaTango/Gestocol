# Gestocol

Application de gestion des colis avec FastAPI (backend) et React (frontend).

## 🚀 Présentation
Gestocol permet de gérer les codes de validation, les colis et leur suivi.  

Technologies principales :
- **Backend** : FastAPI + SQLAlchemy + PostgreSQL
- **Frontend** : React + TypeScript + Bootstrap
- **Base de données** : PostgreSQL

---
# Gestocol - Guide d’installation & configuration

Ce document fournit les instructions détaillées pour installer, configurer et lancer l'application **Gestocol** en développement ou en production.

---

## 1️⃣ Pré-requis

- Python 3.11+
- Node.js 20+ et npm 9+
- PostgreSQL 15+
- Git
- (Optionnel) Docker si vous voulez containeriser l'application

---

## 2️⃣ Configuration de la base de données

1. Crée la base PostgreSQL :
```sql
CREATE DATABASE gestocol;
CREATE USER root WITH PASSWORD 'root1A@';
GRANT ALL PRIVILEGES ON DATABASE gestocol TO root;
```

## ⚙️ Installation

### 1. Cloner le dépôt
```bash
git clone https://github.com/ton-compte/gestocol.git
cd gestocol
```


## ######################################
##  Installation Backend (FastAPI)    ###
## ######################################

# Copier .env.example → .env et adapter DATABASE_URL et CORS_ORIGINS.
# Le .env.example sert de modèle ou d’exemple pour montrer quelles variables d’environnement sont 
# nécessaires, sans contenir forcément tes secrets réels (mot de passe, token, etc.).
# Quand tu déploies ou travailles en local :
# Tu copies le fichier exemple :

# sur Linux/macOS
cp .env.example .env    
# sur Windows
cd Gestocol/backend
copy .env.example .env   


# Installer venv & dépendances :
# Télécharge Python depuis https://python.org
# Installer Python
# Important : coche l’option “Add Python to PATH” pendant l’installation.

# puis créer un environnement virtuel Python dans le dossier .venv :
# * redemmarer l'IDE IntelliJ si vous exécuter les commandes dans son Terminal
cd backend
python -m venv .venv

# activer l’environnement virtuel Python que tu as créé avec python -m venv .venv
# sous PowerShell: 
cd C:\Users\mashk\IdeaProjects\Gestocol\backend
.\.venv\Scripts\Activate
# sous Bash: 
cd C:\Users\mashk\IdeaProjects\Gestocol\backend
source .venv/bin/activate

# requirements :
cd backend
pip install -r requirements.txt


## ##########################
## TESTER EN LOCAL (DEV)   ##
## ##########################

## Lancer l'API :
## Lancer le backend
uvicorn main:app --reload --host 0.0.0.0 --port 8083
uvicorn main:app --reload  --port 8083

## Lancer le frontend
cd frontend
npm install
npm start

## Accès à l’application
API backend API Swagger : http://localhost:8083/docs
Frontend React : http://localhost:3000
Déploiement (production) : https://www.gestocol.rafaros-it.fr
# API accessible sur Endpoint CRUD exemple : http://localhost:8083/api/codevalidations/




## ⚙️ SIGNATURE & COPYRIGHTS :
## Développé en Python FastApi & React par François Yvon RAFARALAHY