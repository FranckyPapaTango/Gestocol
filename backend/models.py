# backend/models.py
from sqlalchemy import Column, Integer, BigInteger, String
from database import Base

class CodeValidation(Base):
    __tablename__ = "codevalidation"

    # correspond à id_codevalidation en Java
    id_codevalidation = Column(BigInteger, primary_key=True, index=True)
    valeur_litterale = Column(String, nullable=True)

  #  css_raw_color_code = Column(String, nullable=True)
  #  css_color_name = Column(String, nullable=True)
