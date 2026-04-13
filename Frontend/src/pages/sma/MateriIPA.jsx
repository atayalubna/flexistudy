import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const MateriIPASMA = () => {
  const { state } = useLocation();
  const { id } = useParams();

  // --- DATA SOAL KUIS (MATERI SMA) ---
  const masterQuestions = [
    {
      q: "Proses pembelahan sel yang menghasilkan dua sel anakan identik dengan induknya disebut...",
      options: ["Meiosis", "Mitosis", "Amitosis", "Fertilisasi"],
      correct: "Mitosis"
    },
    {
      q: "Satuan jumlah zat dalam kimia yang menyatakan jumlah partikel sebanding dengan konstanta Avogadro disebut...",
      options: ["Molaritas", "Mol", "Entalpi", "Katalis"],
      correct: "Mol"
    },
    {
      q: "Menurut Hukum I Termodinamika, energi tidak dapat diciptakan atau dimusnahkan, melainkan...",
      options: ["Dihilangkan", "Berubah bentuk", "Menjadi dingin", "Diam"],
      correct: "Berubah bentuk"
    },
    {
      q: "Cabang kimia yang khusus mempelajari senyawa hidrokarbon dan turunannya adalah...",
      options: ["Kimia Fisik", "Kimia Analitik", "Kimia Organik", "Biokimia"],
      correct: "Kimia Organik"
    },
    {
      q: "Gaya yang menyebabkan benda bergerak melingkar dan arahnya menuju pusat lingkaran disebut...",
      options: ["Gaya Gesek", "Gaya Sentripetal", "Gaya Berat", "Gaya Normal"],
      correct: "Gaya Sentripetal"
    }
  ];

  // --- LOGIC KUIS ---
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState([]);

  // Fungsi mengacak soal
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
          padding: 25px;
          font-family: 'Segoe UI', Roboto, sans-serif;
          max-width: 1000px;
          margin: auto;
          line-height: 1.6;
        }

        .header-sma {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
          padding: 20px 30px;
          border-radius: 12px;
          border-left: 8px solid #1976d2;
          margin-bottom: 30px;
        }

        .level-title {
          font-size: 1.4rem;
          color: #1565c0;
          font-weight: 800;
          margin-bottom: 25px;
          border-bottom: 2px solid #e0e0e0;
          padding-bottom: 10px;
        }

        .grid-subjects {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .subject-card {
          background: #ffffff;
          border: 1px solid #cfd8dc;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .subject-badge {
          display: inline-block;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 15px;
        }

        .biologi-bg { background: #e8f5e9; color: #2e7d32; }
        .fisika-bg { background: #fff3e0; color: #ef6c00; }
        .kimia-bg { background: #f3e5f5; color: #7b1fa2; }

        .subject-card h4 { margin: 10px 0; color: #333; }
        .subject-card ul { padding-left: 20px; font-size: 0.9rem; color: #455a64; }
        .subject-card li { margin-bottom: 8px; }

        /* QUIZ STYLING */
        .quiz-wrapper {
          background-color: #f1f8e9;
          border: 2px solid #a5d6a7;
          border-radius: 20px;
          padding: 30px;
          margin-top: 50px;
        }

        .quiz-info-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }

        .q-icon {
          background: #388e3c;
          color: white;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .question-panel {
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .opt-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }

        .opt-btn {
          padding: 15px;
          text-align: left;
          border: 1px solid #ddd;
          border-radius: 10px;
          background: white;
          cursor: pointer;
          font-size: 1rem;
          transition: 0.3s;
        }

        .opt-btn:hover {
          background-color: #e8f5e9;
          border-color: #388e3c;
        }

        .score-box {
          text-align: center;
          padding: 30px;
        }

        .btn-retry {
          background-color: #388e3c;
          color: white;
          border: none;
          padding: 12px 35px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          margin-top: 20px;
        }
      `}</style>

      {/* HEADER */}
      <div className="header-sma">
        <h2 style={{ margin: 0 }}>{state?.title || "Sains Lanjutan (IPA)"}</h2>
        <p style={{ margin: "5px 0", color: "#455a64" }}>
          Fokus: Kedalaman Materi & Analisis Kuantitatif | ID: {id || "SMA-IPA-COMPLEX"}
        </p>
      </div>

      <div className="level-title">Tingkat Sekolah Menengah Atas (SMA)</div>

      <div className="grid-subjects">
        {/* BIOLOGI */}
        <div className="subject-card">
          <span className="subject-badge biologi-bg">Biologi</span>
          <h4>Kehidupan & Genetika</h4>
          <ul>
            <li><strong>Sel & Genetika:</strong> Struktur organel, sintesis protein, dan hukum pewarisan Mendel.</li>
            <li><strong>Metabolisme:</strong> Enzim, Respirasi Sel (Katabolisme), dan Fotosintesis (Anabolisme).</li>
            <li><strong>Evolusi:</strong> Teori asal-usul kehidupan dan manipulasi bioteknologi modern.</li>
          </ul>
        </div>

        {/* FISIKA */}
        <div className="subject-card">
          <span className="subject-badge fisika-bg">Fisika</span>
          <h4>Mekanika & Modern</h4>
          <ul>
            <li><strong>Mekanika:</strong> Analisis vektor pada gerak parabola, melingkar, dan dinamika rotasi.</li>
            <li><strong>Termodinamika:</strong> Gas ideal, perpindahan kalor, dan mekanika fluida.</li>
            <li><strong>Fisika Modern:</strong> Listrik magnet, relativitas Einstein, dan fisika kuantum.</li>
          </ul>
        </div>

        {/* KIMIA */}
        <div className="subject-card">
          <span className="subject-badge kimia-bg">Kimia</span>
          <h4>Struktur & Reaksi</h4>
          <ul>
            <li><strong>Ikatan Kimia:</strong> Konfigurasi elektron, tabel periodik, dan gaya antar molekul.</li>
            <li><strong>Stoikiometri:</strong> Konsep mol, perhitungan reaksi, dan sifat koligatif larutan.</li>
            <li><strong>Kimia Organik:</strong> Senyawa hidrokarbon, gugus fungsi, dan makromolekul.</li>
          </ul>
        </div>
      </div>

      {/* SECTION KUIS */}
      <div className="quiz-wrapper">
        <div className="quiz-info-header">
          <div className="q-icon">?</div>
          <div>
            <h3 style={{ margin: 0 }}>Evaluasi Pemahaman SMA</h3>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "#388e3c" }}>Soal akan diacak otomatis setiap sesi</p>
          </div>
        </div>

        {showScore ? (
          <div className="score-box">
            <h2>Kuis Selesai! 🎉</h2>
            <p style={{ fontSize: "1.3rem" }}>Nilai Anda: <strong>{score * 20} / 100</strong></p>
            <p>Benar {score} dari {questions.length} soal.</p>
            <button className="btn-retry" onClick={shuffleQuestions}>Mulai Ulang (Acak Soal)</button>
          </div>
        ) : (
          questions.length > 0 && (
            <div className="question-panel">
              <span style={{ color: "#888", fontSize: "0.8rem" }}>Pertanyaan {currentQuestion + 1} / {questions.length}</span>
              <h4 style={{ marginTop: "10px", lineHeight: "1.4" }}>{questions[currentQuestion].q}</h4>
              
              <div className="opt-grid">
                {questions[currentQuestion].options.map((option, idx) => (
                  <button 
                    key={idx} 
                    className="opt-btn"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
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

export default MateriIPASMA;