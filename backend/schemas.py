# backend/schemas.py
from pydantic import BaseModel
from typing import Optional
from datetime import datetime


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



class TypePhysiqueBase(BaseModel):
    css_raw_color_code: str
    date_persistence: Optional[datetime] = None
    updated_version_date: Optional[datetime] = None
    type_physique: Optional[str] = None

class TypePhysiqueCreate(TypePhysiqueBase):
    pass

class TypePhysiqueUpdate(TypePhysiqueBase):
    pass

class TypePhysique(TypePhysiqueBase):
    id_type_physique: int

    class Config:
        orm_mode = True
