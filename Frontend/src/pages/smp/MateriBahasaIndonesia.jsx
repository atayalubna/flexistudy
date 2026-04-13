import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const BahasaIndonesiaSMP = () => {
  const { state } = useLocation();
  const { id } = useParams();

  // --- DATA SOAL KUIS (BAHASA INDONESIA SMP) ---
  const masterQuestions = [
    {
      q: "Struktur teks narasi fantasi yang berisi munculnya masalah hingga mencapai puncak konflik disebut...",
      options: ["Orientasi", "Komplikasi", "Resolusi", "Koda"],
      correct: "Komplikasi"
    },
    {
      q: "Teks yang menggambarkan objek secara mendalam agar pembaca seolah melihat sendiri disebut...",
      options: ["Teks Prosedur", "Teks Eksposisi", "Teks Deskripsi", "Teks Berita"],
      correct: "Teks Deskripsi"
    },
    {
      q: "Informasi paling penting dalam teks berita diletakkan di bagian awal, metode ini disebut...",
      options: ["Piramida Terbalik", "Induktif", "Deduktif", "Kronologis"],
      correct: "Piramida Terbalik"
    },
    {
      q: "Puisi rakyat yang terdiri dari dua baris dalam satu bait dan berisi nasihat disebut...",
      options: ["Pantun", "Syair", "Gurindam", "Karmina"],
      correct: "Gurindam"
    },
    {
      q: "Bagian teks prosedur yang berisi instruksi urut untuk mencapai tujuan adalah...",
      options: ["Alat dan Bahan", "Langkah-langkah", "Penutup", "Orientasi"],
      correct: "Langkah-langkah"
    }
  ];

  // --- STATE LOGIC ---
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState([]);

  // Fungsi mengacak soal (Fisher-Yates Shuffle)
  const shuffleQuestions = () => {
    let shuffled = [...masterQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  useEffect(() => {
    shuffleQuestions();
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
      {/* INTERNAL CSS */}
      <style>{`
        .materi-container {
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 1000px;
          margin: auto;
          background-color: #ffffff;
        }

        .header-blue {
          background-color: #f1f7ff;
          padding: 15px 25px;
          border-radius: 10px;
          border-left: 5px solid #2d7dd2;
          margin-bottom: 30px;
        }

        .section-title {
          font-size: 1.2rem;
          color: #77c145;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
          border-bottom: 1px solid #77c145;
          padding-bottom: 10px;
        }

        .grid-materi {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .card-materi {
          background: #fff;
          border: 1px solid #e0e6ed;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
        }

        .badge-topic {
          background-color: #e2ffe3;
          color: #2d7dd2;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
          display: inline-block;
          margin-bottom: 12px;
        }

        .card-materi h4 {
          margin: 0 0 10px 0;
          color: #333;
        }

        .card-materi p {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.6;
          margin: 0;
        }

        /* QUIZ BOX STYLE */
        .quiz-section {
          background-color: #8fc219;
          border: 1px solid #d4e5c3;
          border-radius: 15px;
          padding: 25px;
        }

        .quiz-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .icon-circle {
          background: #558b2f;
          color: white;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        }

        .question-card {
          background: white;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid #6fe058;
        }

        .option-btn {
          display: block;
          width: 100%;
          text-align: left;
          padding: 12px 15px;
          margin: 8px 0;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          transition: 0.2s;
        }

        .option-btn:hover {
          background-color: #f0f7ff;
          border-color: #2d7dd2;
        }

        .result-box {
          text-align: center;
          padding: 20px;
        }

        .restart-btn {
          background-color: #558b2f;
          color: white;
          border: none;
          padding: 10px 25px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
          margin-top: 15px;
        }
      `}</style>

      {/* HEADER */}
      <div className="header-blue">
        <h2 style={{ margin: 0, color: "#558b2f" }}>Bahasa Indonesia</h2>
        <p style={{ margin: 0, fontSize: "0.9rem", color: "#625b5b" }}>
          Literasi Dasar dan Tata Bahasa Utama | ID: {id || "SMP-BI-01"}
        </p>
      </div>

      <div className="section-title">Jenjang SMP: Analisis Struktur & Jenis Teks</div>

      {/* GRID MATERI */}
      <div className="grid-materi">
        {/* Kelompok 1 */}
        <div className="card-materi">
          <span className="badge-topic">Deskripsi & Narasi</span>
          <h4>Sastra Imajinatif</h4>
          <p>
            <strong>Teks Deskripsi:</strong> Menggambarkan objek/tempat melalui panca indra.<br />
            <strong>Narasi Fantasi:</strong> Cerita ajaib dengan struktur Orientasi, Komplikasi, dan Resolusi.
          </p>
        </div>

        {/* Kelompok 2 */}
        <div className="card-materi">
          <span className="badge-topic">Prosedur & Observasi</span>
          <h4>Teks Informatif</h4>
          <p>
            <strong>Teks Prosedur:</strong> Instruksi tutorial (tujuan, alat, langkah, penutup).<br />
            <strong>LHO:</strong> Laporan hasil pengamatan lapangan secara objektif dan informatif.
          </p>
        </div>

        {/* Kelompok 3 */}
        <div className="card-materi">
          <span className="badge-topic">Komunikasi & Opini</span>
          <h4>Persuasi Publik</h4>
          <p>
            <strong>Berita:</strong> Format piramida terbalik (info penting di awal).<br />
            <strong>Iklan/Poster:</strong> Teknik membujuk singkat & menarik.<br />
            <strong>Eksposisi:</strong> Argumen pribadi berbasis fakta.
          </p>
        </div>

        {/* Kelompok 4 */}
        <div className="card-materi">
          <span className="badge-topic">Sastra Lanjutan</span>
          <h4>Puisi Rakyat</h4>
          <p>
            <strong>Pantun:</strong> Sampiran & isi (a-b-a-b).<br />
            <strong>Syair:</strong> Sajak terus menerus (a-a-a-a).<br />
            <strong>Gurindam:</strong> Dua baris berisi nasihat.
          </p>
        </div>
      </div>

      {/* KUIS SECTION */}
      <div className="quiz-section">
        <div className="quiz-header">
          <div className="icon-circle">?</div>
          <div>
            <h3 style={{ margin: 0 }}>Kuis Singkat</h3>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "#558b2f" }}>5 soal Bahasa Indonesia SMP</p>
          </div>
        </div>

        {showScore ? (
          <div className="result-box">
            <h3>Kuis Selesai! 🎉</h3>
            <p>Skor Anda: <strong>{score}</strong> dari {questions.length}</p>
            <button className="restart-btn" onClick={shuffleQuestions}>Coba Lagi (Soal Diacak)</button>
          </div>
        ) : (
          questions.length > 0 && (
            <div className="question-card">
              <p style={{ fontSize: "0.8rem", color: "#888" }}>Soal {currentQuestion + 1} dari {questions.length}</p>
              <h4 style={{ margin: "10px 0 20px 0" }}>{questions[currentQuestion].q}</h4>
              <div className="options-area">
                {questions[currentQuestion].options.map((opt, i) => (
                  <button 
                    key={i} 
                    className="option-btn"
                    onClick={() => handleAnswer(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BahasaIndonesiaSMP;