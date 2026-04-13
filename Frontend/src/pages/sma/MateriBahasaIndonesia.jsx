import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const BahasaIndonesiaSMK = () => {
  const { state } = useLocation();
  const { id } = useParams();

  // --- DATA KUIS (MATERI SMK) ---
  const masterQuestions = [
    {
      q: "Tujuan utama dari sebuah teks negosiasi adalah untuk mencapai...",
      options: ["Kemenangan sepihak", "Kesepakatan bersama", "Perdebatan panjang", "Kritik sosial"],
      correct: "Kesepakatan bersama"
    },
    {
      q: "Bagian surat lamaran pekerjaan yang berisi informasi kualifikasi dan keahlian pelamar disebut...",
      options: ["Orientasi", "Tesis/Pernyataan argumentasi", "Isi surat", "Salam pembuka"],
      correct: "Isi surat"
    },
    {
      q: "Teks yang berisi cerita lucu namun bertujuan untuk memberikan kritik terhadap fenomena sosial disebut...",
      options: ["Teks Eksplanasi", "Teks Prosedur", "Teks Anekdot", "Teks Narasi"],
      correct: "Teks Anekdot"
    },
    {
      q: "Dalam teks eksplanasi, bagian yang menjelaskan hubungan sebab-akibat secara logis disebut...",
      options: ["Identifikasi fenomena", "Deretan penjelas", "Interpretasi", "Tesis"],
      correct: "Deretan penjelas"
    },
    {
      q: "Laporan penelitian yang disusun secara sistematis mulai dari rumusan masalah hingga kesimpulan disebut...",
      options: ["Karya Ilmiah", "Esai", "Resensi", "Kritik"],
      correct: "Karya Ilmiah"
    }
  ];

  // --- LOGIC KUIS ---
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const shuffleQuiz = () => {
    const shuffled = [...masterQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  useEffect(() => {
    shuffleQuiz();
  }, []);

  const handleAnswer = (selected) => {
    if (selected === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="materi-container">
      <style>{`
        .materi-container {
          padding: 25px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 1000px;
          margin: auto;
          color: #333;
        }
        .header-section {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          padding: 30px;
          border-radius: 12px;
          margin-bottom: 30px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .main-title {
          font-size: 1.6rem;
          font-weight: bold;
          border-bottom: 3px solid #e74c3c;
          padding-bottom: 10px;
          margin-bottom: 25px;
          color: #2c3e50;
        }
        .grid-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .info-card {
          background: #fff;
          border: 1px solid #dcdde1;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .badge {
          background: #e74c3c;
          color: white;
          padding: 4px 12px;
          border-radius: 5px;
          font-size: 0.7rem;
          font-weight: bold;
          text-transform: uppercase;
        }
        .card-title { color: #2980b9; margin: 15px 0 10px 0; font-size: 1.1rem; }
        .card-body { font-size: 0.9rem; line-height: 1.6; color: #57606f; }
        
        .quiz-box {
          background: #fdfdfd;
          border: 2px solid #3498db;
          border-radius: 15px;
          padding: 30px;
          margin-top: 40px;
        }
        .btn-opt {
          text-align: left;
          padding: 15px;
          border: 1px solid #dcdde1;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          margin-bottom: 10px;
          width: 100%;
          font-size: 0.95rem;
          transition: 0.2s;
        }
        .btn-opt:hover { background: #ebf5fb; border-color: #3498db; }
        .restart-btn {
          background: #3498db;
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
          margin-top: 20px;
        }
      `}</style>

      {/* HEADER */}
      <div className="header-section">
        <h2 style={{ margin: 0 }}>{state?.title || "Bahasa Indonesia SMK"}</h2>
        <p style={{ margin: "10px 0 0 0", opacity: 0.8 }}>
          Topik: {state?.topic || "Komunikasi Profesional & Penulisan Akademik"} | ID: {id || "BI-SMK-2026"}
        </p>
      </div>

      <h1 className="main-title">Materi Pembelajaran Tingkat SMK</h1>

      <div className="grid-content">
        {/* 1. Komunikasi Profesional */}
        <div className="info-card">
          <span className="badge">Profesional</span>
          <h4 className="card-title">Keterampilan Komunikasi</h4>
          <p className="card-body">
            <strong>Teks Negosiasi:</strong> Seni mencapai kesepakatan mufakat di tengah perbedaan kepentingan.
            <br />
            <strong>Surat Lamaran Kerja:</strong> Dokumen formal yang mencakup kualifikasi, keahlian, dan administrasi sesuai standar dunia kerja.
          </p>
        </div>

        {/* 2. Analisis Kritis */}
        <div className="info-card">
          <span className="badge">Kritis</span>
          <h4 className="card-title">Analisis Fenomena</h4>
          <p className="card-body">
            <strong>Teks Anekdot:</strong> Sindiran lucu terhadap isu sosial.
            <br />
            <strong>Teks Eksplanasi:</strong> Penjelasan logis proses fenomena alam/sosial (sebab-akibat).
            <br />
            <strong>Resensi:</strong> Penilaian kualitas karya secara objektif.
          </p>
        </div>

        {/* 3. Akademik & Sastra */}
        <div className="info-card">
          <span className="badge">Akademik</span>
          <h4 className="card-title">Penulisan & Sastra</h4>
          <p className="card-body">
            <strong>Karya Ilmiah:</strong> Penulisan laporan penelitian sistematis (data & analisis).
            <br />
            <strong>Kritik & Esai:</strong> Penulisan opini tajam berdasarkan analisis mendalam terhadap sebuah isu.
          </p>
        </div>
      </div>

      {/* QUIZ SECTION */}
      <div className="quiz-box">
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <div style={{ background: "#3498db", color: "white", width: "30px", height: "30px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>?</div>
          <h3 style={{ margin: 0 }}>Uji Kompetensi Bahasa</h3>
        </div>

        {showScore ? (
          <div style={{ textAlign: "center" }}>
            <h2>Selesai! 🎉</h2>
            <p style={{ fontSize: "1.4rem" }}>Skor: <strong>{score * 20} / 100</strong></p>
            <p>Berhasil menjawab {score} dari {questions.length} soal.</p>
            <button className="restart-btn" onClick={shuffleQuiz}>Ulangi & Acak Soal</button>
          </div>
        ) : (
          questions.length > 0 && (
            <div className="q-area">
              <span style={{ fontSize: "0.85rem", color: "#7f8c8d" }}>Pertanyaan {currentQuestion + 1} dari {questions.length}</span>
              <h4 style={{ margin: "15px 0 25px 0", lineHeight: "1.4" }}>{questions[currentQuestion].q}</h4>
              <div className="option-group">
                {questions[currentQuestion].options.map((opt, i) => (
                  <button key={i} className="btn-opt" onClick={() => handleAnswer(opt)}>{opt}</button>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BahasaIndonesiaSMK;