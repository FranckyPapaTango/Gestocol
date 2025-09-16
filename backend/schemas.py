# backend/schemas.py
from pydantic import BaseModel
from typing import Optional

class CodeValidationBase(BaseModel):
    valeur_litterale: Optional[str] = None
 #   css_raw_color_code: Optional[str] = None
 #   css_color_name: Optional[str] = None

class CodeValidationCreate(CodeValidationBase):
    pass

class CodeValidationUpdate(CodeValidationBase):
    pass

class CodeValidation(CodeValidationBase):
    id_codevalidation: int

    class Config:
        orm_mode = True
