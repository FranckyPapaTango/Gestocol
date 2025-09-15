# backend/schemas.py
from pydantic import BaseModel
from typing import Optional

class CodeValidationBase(BaseModel):
    valeur_litterale: Optional[str] = None

class CodeValidationCreate(CodeValidationBase):
    pass

class CodeValidationUpdate(CodeValidationBase):
    pass

class CodeValidation(CodeValidationBase):
    id_codevalidation: int

    class Config:
        orm_mode = True
