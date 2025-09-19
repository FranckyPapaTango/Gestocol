from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend import models
from backend.database import engine
from backend.routers import type_physique, codevalidation


# Création de l’app
app = FastAPI(title="Gestocol API", version="1.0.0")

# Création des tables
models.Base.metadata.create_all(bind=engine)

# CORS
origins = [
    "http://localhost:3000",
    "https://gestocol.rafaros-it.fr",
    "https://www.gestocol.rafaros-it.fr",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Montage des routers
app.include_router(type_physique.router)
app.include_router(codevalidation.router)
