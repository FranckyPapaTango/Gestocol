# backend/models.py
from .database import Base
from sqlalchemy import Column, BigInteger, Integer, String, TIMESTAMP


class CodeValidation(Base):
    __tablename__ = "codevalidation"

    # correspond à id_codevalidation en Java
    id_codevalidation = Column(BigInteger, primary_key=True, index=True)
    valeur_litterale = Column(String, nullable=True)

  #  css_raw_color_code = Column(String, nullable=True)
  #  css_color_name = Column(String, nullable=True)


class TypePhysique(Base):
    __tablename__ = "type_physique"

    id_type_physique = Column(BigInteger, primary_key=True, index=True)
    css_raw_color_code = Column(String(255), nullable=False)
    date_persistence = Column(TIMESTAMP, nullable=True)
    updated_version_date = Column(TIMESTAMP, nullable=True)
    type_physique = Column(String(255), nullable=True)

