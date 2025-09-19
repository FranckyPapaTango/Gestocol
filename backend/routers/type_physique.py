from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

""" from backend.database import get_db
from backend import crud, schemas """

from .. import crud, schemas
from ..database import get_db

router = APIRouter(
    prefix="/api/typephysiques",
    tags=["typephysiques"],
)

@router.get("/", response_model=List[schemas.TypePhysique])
def read_type_physiques(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_type_physiques(db, skip=skip, limit=limit)

@router.get("/{type_physique_id}", response_model=schemas.TypePhysique)
def read_type_physique(type_physique_id: int, db: Session = Depends(get_db)):
    db_type_physique = crud.get_type_physique(db, type_physique_id)
    if db_type_physique is None:
        raise HTTPException(status_code=404, detail="TypePhysique not found")
    return db_type_physique

@router.post("/", response_model=schemas.TypePhysique)
def create_type_physique(type_physique: schemas.TypePhysiqueCreate, db: Session = Depends(get_db)):
    return crud.create_type_physique(db=db, type_physique=type_physique)

@router.put("/{type_physique_id}", response_model=schemas.TypePhysique)
def update_type_physique(type_physique_id: int, type_physique: schemas.TypePhysiqueUpdate, db: Session = Depends(get_db)):
    db_type_physique = crud.update_type_physique(db, type_physique_id, type_physique)
    if db_type_physique is None:
        raise HTTPException(status_code=404, detail="TypePhysique not found")
    return db_type_physique

@router.delete("/{type_physique_id}", response_model=dict)
def delete_type_physique(type_physique_id: int, db: Session = Depends(get_db)):
    success = crud.delete_type_physique(db, type_physique_id)
    if not success:
        raise HTTPException(status_code=404, detail="TypePhysique not found")
    return {"ok": True}
