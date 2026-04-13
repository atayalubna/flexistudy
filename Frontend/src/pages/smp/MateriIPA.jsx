import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const IPAMateriSMP = () => {
  const { state } = useLocation();
  const { id } = useParams();

  // --- DATA KUIS IPA SMP ---
  const masterQuestions = [
    {
      q: "Sistem klasifikasi yang membagi makhluk hidup menjadi Monera, Protista, Fungi, Plantae, dan Animalia disebut sistem...",
      options: ["3 Kingdom", "4 Kingdom", "5 Kingdom", "6 Kingdom"],
      correct: "5 Kingdom"
    },
    {
      q: "Organel sel yang berfungsi sebagai tempat respirasi sel dan penghasil energi adalah...",
      options: ["Nukleus", "Mitokondria", "Ribosom", "Vakuola"],
      correct: "Mitokondria"
    },
    {
      q: "Zat yang memiliki rasa masam dan memiliki pH di bawah 7 disebut...",
      options: ["Basa", "Garam", "Asam", "Netral"],
      correct: "Asam"
    },
    {
      q: "Hukum Newton yang menyatakan bahwa setiap aksi akan menimbulkan reaksi yang sama besar dan berlawanan arah adalah...",
      options: ["Hukum I Newton", "Hukum II Newton", "Hukum III Newton", "Hukum Gravitasi"],
      correct: "Hukum III Newton"
    },
    {
      q: "Unit terkecil penyusun makhluk hidup disebut...",
      options: ["Jaringan", "Organ", "Sistem Organ", "Sel"],
      correct: "Sel"
    }
  ];

  // --- STATE LOGIC ---
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Fungsi mengacak soal (Fisher-Yates Shuffle)
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
      {/* INTEGRATED CSS */}
      <style>{`
        .materi-container {
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 900px;
          margin: auto;
          background-color: #fff;
        }
        .header-box {
          background-color: #f0f7ff;
          padding: 20px;
          border-radius: 12px;
          border-left: 6px solid #007bff;
          margin-bottom: 30px;
        }
        .section-main {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
          border-bottom: 2px solid #eee;
          padding-bottom: 10px;
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
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          transition: transform 0.2s;
        }
        .card-materi:hover { transform: translateY(-5px); }
        .badge-topik {
          background-color: #e7f3ff;
          color: #007bff;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: bold;
          display: inline-block;
          margin-bottom: 10px;
        }
        .card-materi h4 { margin: 10px 0; color: #2c3e50; }
        .card-materi p { font-size: 0.9rem; color: #555; line-height: 1.6; }
        
        /* QUIZ SECTION */
        .quiz-container {
          background-color: #f8fff4;
          border: 2px solid #d4edda;
          border-radius: 15px;
          padding: 30px;
          margin-top: 50px;
        }
        .quiz-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        .quiz-icon {
          background: #28a745;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        }
        .option-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }
        .option-btn {
          padding: 15px;
          text-align: left;
          border: 1px solid #ced4da;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          font-size: 1rem;
          transition: 0.2s;
        }
        .option-btn:hover {
          background-color: #e9f7ef;
          border-color: #28a745;
        }
        .btn-reset {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 20px;
        }
      `}</style>

      {/* HEADER */}
      <div className="header-box">
        <h2 style={{ margin: 0, color: "#0056b3" }}>{state?.title || "Materi IPA Terpadu"}</h2>
        <p style={{ margin: "5px 0", color: "#666" }}>
          Topik: {state?.topic || "Sains Menengah (SMP)"} | ID: {id || "IPA-SMP-002"}
        </p>
      </div>

      <h1 className="section-main">MATERI TINGKAT SMP</h1>

      <div className="grid-materi">
        <div className="card-materi">
          <span className="badge-topik">Biologi</span>
          <h4>Klasifikasi & Ekosistem</h4>
          <p>Mempelajari sistem lima kingdom dan interaksi makhluk hidup dalam rantai makanan serta jaring-jaring makanan di sebuah ekosistem.</p>
        </div>

        <div className="card-materi">
          <span className="badge-topik">Anatomi</span>
          <h4>Sel & Sistem Organ</h4>
          <p>Pembahasan sel sebagai unit terkecil kehidupan, serta sistem tubuh manusia seperti pencernaan, pernapasan, peredaran darah, dan ekskresi.</p>
        </div>

        <div className="card-materi">
          <span className="badge-topik">Kimia</span>
          <h4>Zat & Karakteristik</h4>
          <p>Pengenalan atom, molekul, unsur, senyawa, dan campuran. Mempelajari konsep larutan melalui pH Asam, Basa, dan Garam.</p>
        </div>

        <div className="card-materi">
          <span className="badge-topik">Fisika</span>
          <h4>Gerak & Energi</h4>
          <p>Mempelajari Hukum Newton, tekanan, pesawat sederhana, getaran, gelombang, bunyi, serta dasar-dasar listrik statis dan dinamis.</p>
        </div>
      </div>

      <hr style={{ margin: "50px 0", border: "0", borderTop: "1px solid #eee" }} />

      {/* QUIZ SECTION */}
      <div className="quiz-container">
        <div className="quiz-header">
          <div className="quiz-icon">?</div>
          <div>
            <h3 style={{ margin: 0, color: "#155724" }}>Uji Pemahaman SMP</h3>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "#28a745" }}>Soal akan diacak otomatis setiap kali Anda mengulang kuis.</p>
          </div>
        </div>

        {showScore ? (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Kuis Selesai! 🎉</h2>
            <p style={{ fontSize: "1.2rem" }}>Skor Anda: <strong>{score}</strong> dari {questions.length}</p>
            <button className="btn-reset" onClick={shuffleQuiz}>Coba Lagi (Acak Soal)</button>
          </div>
        ) : (
          questions.length > 0 && (
            <div className="question-area">
              <p style={{ color: "#888", fontSize: "0.9rem" }}>Pertanyaan {currentQuestion + 1} dari {questions.length}</p>
              <h4 style={{ margin: "10px 0 20px 0", lineHeight: "1.5" }}>{questions[currentQuestion].q}</h4>
              <div className="option-list">
                {questions[currentQuestion].options.map((opt, idx) => (
                  <button 
                    key={idx} 
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

export default IPAMateriSMP;