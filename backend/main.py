# backend/main.py
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
import models, schemas, crud
from database import SessionLocal, engine
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

load_dotenv()

# create tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Gestocol API", version="1.0.0")

# CORS : autoriser ton frontend dev React
origins = [
    "http://localhost:3000",
    "https://gestocol.rafaros-it.fr",      # sans www
    "https://www.gestocol.rafaros-it.fr",  # avec www
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DB dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

BASE = "/api/codevalidations"

@app.get(BASE + "/", response_model=list[schemas.CodeValidation])
def read_codevalidations(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_codevalidations(db, skip=skip, limit=limit)

@app.get(BASE + "/{cv_id}", response_model=schemas.CodeValidation)
def read_codevalidation(cv_id: int, db: Session = Depends(get_db)):
    db_cv = crud.get_codevalidation(db, cv_id)
    if db_cv is None:
        raise HTTPException(status_code=404, detail="CodeValidation not found")
    return db_cv

@app.post(BASE + "/", response_model=schemas.CodeValidation, status_code=201)
def create_codevalidation(cv: schemas.CodeValidationCreate, db: Session = Depends(get_db)):
    try:
        return crud.create_codevalidation(db, cv)
    except Exception as e:
        # Logger l’erreur pour debug
        print("Erreur lors de la création :", e)
        raise HTTPException(status_code=500, detail="Impossible de créer le CodeValidation")

@app.put(BASE + "/{cv_id}", response_model=schemas.CodeValidation)
def update_codevalidation(cv_id: int, cv: schemas.CodeValidationUpdate, db: Session = Depends(get_db)):
    db_cv = crud.update_codevalidation(db, cv_id, cv)
    if db_cv is None:
        raise HTTPException(status_code=404, detail="CodeValidation not found")
    return db_cv

@app.delete(BASE + "/{cv_id}", response_model=schemas.CodeValidation)
def delete_codevalidation(cv_id: int, db: Session = Depends(get_db)):
    db_cv = crud.delete_codevalidation(db, cv_id)
    if db_cv is None:
        raise HTTPException(status_code=404, detail="CodeValidation not found")
    return db_cv
