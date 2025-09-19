from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from .. import crud, schemas
from ..database import get_db

router = APIRouter(
    prefix="/api/codevalidations",
    tags=["codevalidations"],
)

@router.get("/", response_model=List[schemas.CodeValidation])
def read_codevalidations(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_codevalidations(db, skip=skip, limit=limit)

@router.get("/{cv_id}", response_model=schemas.CodeValidation)
def read_codevalidation(cv_id: int, db: Session = Depends(get_db)):
    db_cv = crud.get_codevalidation(db, cv_id)
    if db_cv is None:
        raise HTTPException(status_code=404, detail="CodeValidation not found")
    return db_cv

@router.post("/", response_model=schemas.CodeValidation, status_code=201)
def create_codevalidation(cv: schemas.CodeValidationCreate, db: Session = Depends(get_db)):
    try:
        return crud.create_codevalidation(db, cv)
    except Exception as e:
        print("Erreur lors de la création :", e)
        raise HTTPException(status_code=500, detail="Impossible de créer le CodeValidation")

@router.put("/{cv_id}", response_model=schemas.CodeValidation)
def update_codevalidation(cv_id: int, cv: schemas.CodeValidationUpdate, db: Session = Depends(get_db)):
    db_cv = crud.update_codevalidation(db, cv_id, cv)
    if db_cv is None:
        raise HTTPException(status_code=404, detail="CodeValidation not found")
    return db_cv

@router.delete("/{cv_id}", response_model=schemas.CodeValidation)
def delete_codevalidation(cv_id: int, db: Session = Depends(get_db)):
    db_cv = crud.delete_codevalidation(db, cv_id)
    if db_cv is None:
        raise HTTPException(status_code=404, detail="CodeValidation not found")
    return db_cv
