from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
from database import UserDB, get_db
import bcrypt

router = APIRouter()

class LoginSchema(BaseModel):
    email: str
    password: str

@router.post("/login")
async def login_user(user: LoginSchema, db: Session = Depends(get_db)):
    user_in_db = db.query(UserDB).filter(UserDB.email == user.email).first()

    if not user_in_db:
        raise HTTPException(status_code=401, detail="Email atau password salah!")

    # Verifikasi pakai bcrypt langsung
    password_cocok = bcrypt.checkpw(
        user.password.encode('utf-8'),
        user_in_db.password.encode('utf-8')
    )

    if not password_cocok:
        raise HTTPException(status_code=401, detail="Email atau password salah!")

    return {
        "status": "sukses",
        "pesan": f"Selamat datang kembali, {user_in_db.nama_depan}!",
        "data": {
            "nama": f"{user_in_db.nama_depan} {user_in_db.nama_belakang}",
            "email": user_in_db.email
        }
    }