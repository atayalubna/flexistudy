from fastapi import FastAPI, Depends
from pydantic import BaseModel, EmailStr
from fastapi.middleware.cors import CORSMiddleware  # Import sekali saja
from sqlalchemy.orm import Session
from passlib.context import CryptContext
import bcrypt

from database import engine, Base, UserDB, get_db
from login import router as login_router

# Inisialisasi Tabel
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Konfigurasi CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Hubungkan route login
app.include_router(login_router)

# Setup Hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class UserRegister(BaseModel):
    nama_depan: str
    nama_belakang: str
    email: EmailStr
    password: str
    tingkatan_kelas: str  # ✅ Tambah field ini

@app.post("/register")
async def register_user(user: UserRegister, db: Session = Depends(get_db)):
    # Cek email double
    existing_user = db.query(UserDB).filter(UserDB.email == user.email).first()
    if existing_user:
        return {"status": "gagal", "pesan": "Email sudah terdaftar!"}
    
    # Hash password
    hashed_pass = bcrypt.hashpw(user.password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    new_user = UserDB(
        nama_depan=user.nama_depan,
        nama_belakang=user.nama_belakang,
        email=user.email,
        password=hashed_pass,
        tingkatan_kelas=user.tingkatan_kelas  # ✅ Simpan ke DB
    )
    
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    return {"status": "sukses", "pesan": f"Halo {user.nama_depan}, pendaftaran berhasil!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)