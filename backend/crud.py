# backend/crud.py
from sqlalchemy.orm import Session
from backend import models, schemas


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


# --------- TYPE_PHYSIQUE ---------
def get_type_physique(db: Session, type_physique_id: int):
    return db.query(models.TypePhysique).filter(models.TypePhysique.id_type_physique == type_physique_id).first()

def get_type_physiques(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.TypePhysique).offset(skip).limit(limit).all()

def create_type_physique(db: Session, type_physique: schemas.TypePhysiqueCreate):
    db_type_physique = models.TypePhysique(**type_physique.dict())
    db.add(db_type_physique)
    db.commit()
    db.refresh(db_type_physique)
    return db_type_physique

def update_type_physique(db: Session, type_physique_id: int, type_physique: schemas.TypePhysiqueUpdate):
    db_obj = get_type_physique(db, type_physique_id)
    if not db_obj:
        return None
    for key, value in type_physique.dict(exclude_unset=True).items():
        setattr(db_obj, key, value)
    db.commit()
    db.refresh(db_obj)
    return db_obj

def delete_type_physique(db: Session, type_physique_id: int):
    db_obj = get_type_physique(db, type_physique_id)
    if db_obj:
        db.delete(db_obj)
        db.commit()
        return True
    return False
