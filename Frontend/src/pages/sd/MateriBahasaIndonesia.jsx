import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const IPAMateriSD = () => {
  const { state } = useLocation();
  const { id } = useParams();

  // --- DATA KUIS IPA SD ---
  const masterQuestions = [
    {
      q: "Proses perubahan wujud benda dari cair menjadi padat disebut...",
      options: ["Mencair", "Membeku", "Menguap", "Mengembun"],
      correct: "Membeku"
    },
    {
      q: "Berikut ini yang merupakan kebutuhan dasar makhluk hidup adalah...",
      options: ["Bermain", "Bekerja", "Makan dan Minum", "Menonton TV"],
      correct: "Makan dan Minum"
    },
    {
      q: "Sumber energi terbesar bagi bumi adalah...",
      options: ["Baterai", "Matahari", "Lampu", "Angin"],
      correct: "Matahari"
    },
    {
      q: "Perubahan wujud benda dari padat menjadi cair disebut...",
      options: ["Mengkristal", "Menyublim", "Mencair", "Membeku"],
      correct: "Mencair"
    },
    {
      q: "Pusat tata surya kita adalah...",
      options: ["Bumi", "Bulan", "Matahari", "Mars"],
      correct: "Matahari"
    }
  ];

  // --- STATE LOGIC ---
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Fungsi untuk mengacak soal
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
          padding: 20px;
          font-family: 'Poppins', sans-serif;
          max-width: 900px;
          margin: auto;
          color: #333;
        }
        .header-box {
          background-color: #fff9db;
          padding: 25px;
          border-radius: 15px;
          border: 2px dashed #fcc419;
          margin-bottom: 30px;
          text-align: center;
        }
        .section-main {
          font-size: 1.6rem;
          color: #e67e22;
          border-bottom: 3px solid #fab005;
          padding-bottom: 8px;
          margin-top: 30px;
        }
        .grid-materi {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        .card-materi {
          background: #ffffff;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
          border-top: 5px solid #40c057;
        }
        .card-title {
          color: #2f9e44;
          margin-top: 0;
          font-size: 1.2rem;
        }
        .content-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #495057;
        }
        
        /* QUIZ STYLE */
        .quiz-section {
          background-color: #f1f3f5;
          border-radius: 20px;
          padding: 30px;
          margin-top: 50px;
          border: 2px solid #dee2e6;
        }
        .option-btn {
          display: block;
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          background: white;
          border: 1px solid #adb5bd;
          border-radius: 10px;
          cursor: pointer;
          font-size: 1rem;
          transition: 0.2s;
        }
        .option-btn:hover {
          background-color: #e3fafc;
          border-color: #15aabf;
        }
        .btn-restart {
          background-color: #fab005;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 10px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 20px;
        }
      `}</style>

      {/* HEADER */}
      <div className="header-box">
        <h2 style={{ margin: 0 }}>{state?.title || "Eksplorasi Sains SD"}</h2>
        <p style={{ margin: "5px 0", color: "#868e96" }}>
          Topik: {state?.topic || "Materi IPA Dasar"} | ID: {id || "SD-IPA-001"}
        </p>
      </div>

      <h1 className="section-main">MATERI TINGKAT SD</h1>

      <div className="grid-materi">
        {/* Materi 1 */}
        <div className="card-materi">
          <h4 className="card-title">🌱 Makhluk Hidup</h4>
          <p className="content-text">
            Belajar ciri-ciri makhluk hidup: bernapas, makan, tumbuh, dan berkembang biak. 
            Mempelajari metamorfosis hewan dan fungsi bagian tubuh tumbuhan (akar, batang, daun).
          </p>
        </div>

        {/* Materi 2 */}
        <div className="card-materi" style={{ borderColor: "#228be6" }}>
          <h4 className="card-title" style={{ color: "#1c7ed6" }}>💧 Wujud Benda</h4>
          <p className="content-text">
            Benda dikelompokkan menjadi <strong>Padat, Cair, dan Gas</strong>. 
            Perubahannya meliputi: mencair, membeku, menguap, dan mengembun.
          </p>
        </div>

        {/* Materi 3 */}
        <div className="card-materi" style={{ borderColor: "#f59f00" }}>
          <h4 className="card-title" style={{ color: "#e67e22" }}>⚡ Energi & Gaya</h4>
          <p className="content-text">
            Mengenal sumber energi seperti matahari, angin, dan listrik. 
            Belajar konsep gaya berupa tarikan dan dorongan dalam kegiatan sehari-hari.
          </p>
        </div>

        {/* Materi 4 */}
        <div className="card-materi" style={{ borderColor: "#7950f2" }}>
          <h4 className="card-title" style={{ color: "#6741d9" }}>☀️ Tata Surya</h4>
          <p className="content-text">
            Mengenal bumi sebagai tempat tinggal, fase-fase bulan, dan matahari sebagai 
            pusat tata surya yang menerangi planet-planet.
          </p>
        </div>
      </div>

      <hr style={{ margin: "50px 0", border: "0", borderTop: "2px solid #f1f3f5" }} />

      {/* QUIZ SECTION */}
      <div className="quiz-section">
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h3 style={{ margin: 0 }}>Uji Kecerdasan Sains</h3>
          <p style={{ fontSize: "0.85rem", color: "#868e96" }}>Asah kemampuanmu! Soal diacak setiap kali kamu mengulang.</p>
        </div>

        {showScore ? (
          <div style={{ textAlign: "center" }}>
            <h2>Hebat! Kamu Selesai 🎉</h2>
            <p style={{ fontSize: "1.2rem" }}>Skor Kamu: <strong>{score}</strong> dari {questions.length}</p>
            <button className="btn-restart" onClick={shuffleQuiz}>Main Lagi (Acak Soal)</button>
          </div>
        ) : (
          questions.length > 0 && (
            <div>
              <p style={{ fontWeight: "bold", color: "#15aabf" }}>Pertanyaan {currentQuestion + 1} / {questions.length}</p>
              <h4 style={{ margin: "15px 0", lineHeight: "1.5" }}>{questions[currentQuestion].q}</h4>
              <div className="option-group">
                {questions[currentQuestion].options.map((opt, index) => (
                  <button 
                    key={index} 
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

export default IPAMateriSD;