# backend/crud.py
from sqlalchemy.orm import Session
import models, schemas

def get_codevalidations(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.CodeValidation).offset(skip).limit(limit).all()

def get_codevalidation(db: Session, id_codevalidation: int):
    return db.query(models.CodeValidation).filter(models.CodeValidation.id_codevalidation == id_codevalidation).first()

def create_codevalidation(db: Session, cv: schemas.CodeValidationCreate):
    db_cv = models.CodeValidation(valeur_litterale=cv.valeur_litterale)
    db.add(db_cv)
    db.commit()
    db.refresh(db_cv)
    return db_cv

def update_codevalidation(db: Session, id_codevalidation: int, cv_update: schemas.CodeValidationUpdate):
    db_cv = get_codevalidation(db, id_codevalidation)
    if not db_cv:
        return None
    if cv_update.valeur_litterale is not None:
        db_cv.valeur_litterale = cv_update.valeur_litterale
    db.commit()
    db.refresh(db_cv)
    return db_cv

def delete_codevalidation(db: Session, id_codevalidation: int):
    db_cv = get_codevalidation(db, id_codevalidation)
    if not db_cv:
        return None
    db.delete(db_cv)
    db.commit()
    return db_cv
