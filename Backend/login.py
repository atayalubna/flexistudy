from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

# Schema untuk data yang dikirim client
class DataUser(BaseModel):
    email: str
    password: str

# Simulasi Database (Daftar user yang diperbolehkan login)
# Di dunia nyata, ini nanti berasal dari tabel di PostgreSQL/MySQL/MongoDB
fake_users_db = [
    {"email": "user1@example.com", "password": "password123"},
    {"email": "budi@gmail.com", "password": "rahasiabudi"},
    {"email": "clara@kerja.com", "password": "securepassword"}
]

@router.post("/login")
async def login_user(user: DataUser):
    print(f"Percobaan login dari: {user.email}")

    # Mencari user di dalam 'database' kita
    user_found = None
    for u in fake_users_db:
        if u["email"] == user.email:
            user_found = u
            break

    # Cek apakah user ada DAN passwordnya cocok
    if user_found and user_found["password"] == user.password:
        return {
            "status": "sukses", 
            "pesan": f"Selamat datang kembali, {user.email}!",
            "data": {"email": user.email}
        }
    
    # Jika tidak cocok, lempar error 401 (Unauthorized)
    raise HTTPException(status_code=401, detail="Email atau password salah!")