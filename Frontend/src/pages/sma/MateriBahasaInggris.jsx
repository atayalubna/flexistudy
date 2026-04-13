import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const EnglishAdvancedSMA = () => {
  const { state } = useLocation();
  const { id } = useParams();

  // --- DATA KUIS (MATERI SMA) ---
  const masterQuestions = [
    {
      q: "Which part of an Analytical Exposition text reaffirms the writer's position?",
      options: ["Thesis", "Arguments", "Reiteration", "Resolution"],
      correct: "Reiteration"
    },
    {
      q: "If I ... rich, I would travel the world. (Conditional Type 2)",
      options: ["am", "was", "were", "had been"],
      correct: "were"
    },
    {
      q: "A text that presents two points of view (pro and contra) is called...",
      options: ["Narrative", "Discussion", "Exposition", "News Item"],
      correct: "Discussion"
    },
    {
      q: "Change to Passive: 'The government built the bridge.'",
      options: [
        "The bridge is built by government",
        "The bridge was built by government",
        "The bridge has built by government",
        "The bridge is building by government"
      ],
      correct: "The bridge was built by government"
    },
    {
      q: "In a News Item text, where do we find the summary of the main event?",
      options: ["Background Events", "Sources", "Newsworthy Event", "Orientation"],
      correct: "Newsworthy Event"
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
          font-family: 'Inter', 'Segoe UI', sans-serif;
          max-width: 1000px;
          margin: auto;
          color: #2c3e50;
        }
        .header-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          border-radius: 15px;
          margin-bottom: 30px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .main-title {
          font-size: 1.8rem;
          font-weight: 800;
          border-bottom: 3px solid #f8f9fa;
          padding-bottom: 15px;
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
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 20px;
          transition: transform 0.2s;
        }
        .info-card:hover { transform: translateY(-5px); }
        .tag {
          background: #edf2f7;
          color: #4a5568;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: bold;
          text-transform: uppercase;
        }
        .card-title { color: #4a5568; margin: 15px 0 10px 0; font-size: 1.1rem; }
        .card-body { font-size: 0.9rem; line-height: 1.6; color: #718096; }
        
        .quiz-box {
          background: #fffaf0;
          border: 2px solid #feebc8;
          border-radius: 15px;
          padding: 30px;
          margin-top: 40px;
        }
        .option-group { display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }
        .btn-opt {
          text-align: left;
          padding: 15px;
          border: 1px solid #cbd5e0;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          transition: 0.3s;
        }
        .btn-opt:hover { background: #feebc8; border-color: #ed8936; }
        .restart-btn {
          background: #ed8936;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          margin-top: 20px;
        }
      `}</style>

      {/* HEADER */}
      <div className="header-section">
        <h2 style={{ margin: 0 }}>{state?.title || "Advanced English Mastery"}</h2>
        <p style={{ margin: "10px 0 0 0", opacity: 0.9 }}>
          Level: Senior High School (SMA) | Topic: {state?.topic || "Functional Texts & Grammar"}
        </p>
      </div>

      <h1 className="main-title">ADVANCED LEARNING MODULE</h1>

      <div className="grid-content">
        {/* 1. Analytical */}
        <div className="info-card">
          <span className="tag">Exposition</span>
          <h4 className="card-title">Analytical Exposition</h4>
          <p className="card-body">
            Focuses on persuading the reader that an issue is important. Structure: 
            <strong> Thesis, Arguments, and Reiteration.</strong> Uses Simple Present and internal conjunctions.
          </p>
        </div>

        {/* 2. Narrative */}
        <div className="info-card">
          <span className="tag">Fiction</span>
          <h4 className="card-title">Narrative (Advanced)</h4>
          <p className="card-body">
            Deep analysis of problems and resolutions. Structure: 
            <strong> Orientation, Complication, Resolution, and Coda.</strong> Uses Past Tenses and Indirect Speech.
          </p>
        </div>

        {/* 3. Discussion */}
        <div className="info-card">
          <span className="tag">Analysis</span>
          <h4 className="card-title">Discussion Text</h4>
          <p className="card-body">
            Presents pro and contra perspectives on an issue. Structure: 
            <strong> Issue, Arguments For/Against, and Conclusion.</strong> Aims for a balanced view.
          </p>
        </div>

        {/* 4. Grammar */}
        <div className="info-card">
          <span className="tag">Structure</span>
          <h4 className="card-title">Advanced Grammar</h4>
          <p className="card-body">
            Covers <strong>Passive Voice</strong> (Be+V3), <strong>Conditional Sentences</strong> (Type 1-3), 
            and <strong>Relative Clauses</strong> (Who, Which, That) to build complex sentences.
          </p>
        </div>

        {/* 5. News Item */}
        <div className="info-card">
          <span className="tag">Journalism</span>
          <h4 className="card-title">News Item Text</h4>
          <p className="card-body">
            Informs about important daily events. Structure: 
            <strong> Newsworthy Event, Background, and Sources.</strong> Uses concise language and saying verbs.
          </p>
        </div>
      </div>

      {/* QUIZ SECTION */}
      <div className="quiz-box">
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <div style={{ background: "#ed8936", color: "white", padding: "5px 12px", borderRadius: "50%", fontWeight: "bold" }}>?</div>
          <h3 style={{ margin: 0 }}>Advanced Proficiency Test</h3>
        </div>

        {showScore ? (
          <div style={{ textAlign: "center" }}>
            <h2>Quiz Result</h2>
            <p style={{ fontSize: "1.5rem" }}>Score: <strong>{score * 20} / 100</strong></p>
            <button className="restart-btn" onClick={shuffleQuiz}>Restart & Shuffle Questions</button>
          </div>
        ) : (
          questions.length > 0 && (
            <div className="q-area">
              <span style={{ fontSize: "0.8rem", color: "#a0aec0" }}>Question {currentQuestion + 1} of {questions.length}</span>
              <h4 style={{ margin: "10px 0 20px 0" }}>{questions[currentQuestion].q}</h4>
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

export default EnglishAdvancedSMA;