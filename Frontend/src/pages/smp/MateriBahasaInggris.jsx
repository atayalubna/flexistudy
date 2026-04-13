import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const EnglishJuniorHigh = () => {
  const { state } = useLocation();
  const { id } = useParams();

  // --- DATA KUIS (Bahasa Inggris SMP) ---
  const masterQuestions = [
    {
      q: "Which part of Narrative Text introduces the characters and the setting?",
      options: ["Complication", "Resolution", "Orientation", "Reorientation"],
      correct: "Orientation"
    },
    {
      q: "What is the purpose of a Procedure Text?",
      options: ["To tell a story", "To describe a person", "To explain how to do something", "To report past events"],
      correct: "To explain how to do something"
    },
    {
      q: "I ... to Bali with my family last year. (Simple Past)",
      options: ["Go", "Went", "Gone", "Going"],
      correct: "Went"
    },
    {
      q: "A text that tells about someone's past experience is called...",
      options: ["Descriptive Text", "Recount Text", "Narrative Text", "Report Text"],
      correct: "Recount Text"
    },
    {
      q: "The elephant is ... than the cat. (Comparative)",
      options: ["Big", "Biggest", "Bigger", "As big as"],
      correct: "Bigger"
    }
  ];

  // --- LOGIC STATES ---
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
      {/* STYLE INTEGRASI */}
      <style>{`
        .materi-container {
          padding: 20px;
          font-family: 'Inter', sans-serif;
          max-width: 900px;
          margin: auto;
          background-color: #fff;
        }
        .header-box {
          background-color: #f0f4ff;
          padding: 20px;
          border-radius: 12px;
          border-left: 6px solid #4a90e2;
          margin-bottom: 30px;
        }
        .section-main {
          font-size: 1.4rem;
          font-weight: bold;
          color: #2c3e50;
          border-bottom: 2px solid #eee;
          padding-bottom: 10px;
          margin-top: 30px;
        }
        .grid-materi {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }
        .card-materi {
          background: #ffffff;
          border: 1px solid #e1e8ed;
          border-radius: 10px;
          padding: 15px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .badge-type {
          background-color: #e1f5fe;
          color: #0288d1;
          padding: 3px 10px;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 10px;
          display: inline-block;
        }
        .card-materi h4 { margin: 5px 0; color: #333; }
        .card-materi p { font-size: 0.85rem; color: #666; line-height: 1.5; }
        
        /* QUIZ CSS */
        .quiz-box {
          background-color: #f9fff0;
          border: 1px solid #d4edda;
          border-radius: 15px;
          padding: 25px;
          margin-top: 40px;
        }
        .quiz-title-area {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .quiz-icon {
          background: #28a745;
          color: white;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        }
        .opt-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 15px;
        }
        .opt-button {
          padding: 12px;
          text-align: left;
          border: 1px solid #ced4da;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          transition: 0.2s;
        }
        .opt-button:hover {
          background-color: #e8f5e9;
          border-color: #28a745;
        }
        .score-display {
          text-align: center;
          padding: 20px;
        }
        .btn-restart {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 10px 25px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          margin-top: 15px;
        }
      `}</style>

      {/* HEADER */}
      <div className="header-box">
        <h2 style={{ margin: 0 }}>English Subject</h2>
        <p style={{ margin: "5px 0", color: "#666" }}>
          Topic: {state?.topic || "Junior High School (Grade 7–9)"} | ID: {id || "ENG-JHS"}
        </p>
      </div>

      <h1 className="section-main">TEXT TYPES & GRAMMAR</h1>

      <div className="grid-materi">
        {/* 1. Descriptive */}
        <div className="card-materi">
          <span className="badge-type">Descriptive</span>
          <h4>Describing Objects</h4>
          <p>Describes a person, place, or thing in detail. Structure: <strong>Identification</strong> (intro) & <strong>Description</strong> (details).</p>
        </div>

        {/* 2. Procedure */}
        <div className="card-materi">
          <span className="badge-type">Procedure</span>
          <h4>How-to Instructions</h4>
          <p>Explains steps to do/make something. Structure: <strong>Goal</strong>, <strong>Materials</strong>, and <strong>Steps</strong>.</p>
        </div>

        {/* 3. Narrative */}
        <div className="card-materi">
          <span className="badge-type">Narrative</span>
          <h4>Storytelling</h4>
          <p>Tells fictional stories like legends or fables. Structure: <strong>Orientation</strong>, <strong>Complication</strong>, and <strong>Resolution</strong>.</p>
        </div>

        {/* 4. Recount */}
        <div className="card-materi">
          <span className="badge-type">Recount</span>
          <h4>Past Experiences</h4>
          <p>Tells about past events (holidays, school). Structure: <strong>Orientation</strong>, <strong>Events</strong>, and <strong>Reorientation</strong>.</p>
        </div>

        {/* 5. Functional */}
        <div className="card-materi">
          <span className="badge-type">Functional</span>
          <h4>Short Messages</h4>
          <p>Everyday communication: Announcements, Invitations, Greeting Cards, and Short Messages.</p>
        </div>

        {/* 6. Grammar */}
        <div className="card-materi">
          <span className="badge-type">Grammar</span>
          <h4>Structures</h4>
          <p>Mastering <strong>Tenses</strong> (Simple Present, Past, Future), Modal Verbs, Comparatives, and Question Words.</p>
        </div>
      </div>

      <hr style={{ margin: "40px 0", border: "0", borderTop: "1px solid #eee" }} />

      {/* QUIZ SECTION */}
      <div className="quiz-box">
        <div className="quiz-title-area">
          <div className="quiz-icon">?</div>
          <div>
            <h3 style={{ margin: 0 }}>Knowledge Check</h3>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "#28a745" }}>Questions will be shuffled every time you restart.</p>
          </div>
        </div>

        {showScore ? (
          <div className="score-display">
            <h2>Quiz Finished!</h2>
            <p style={{ fontSize: "1.2rem" }}>Your Score: <strong>{score}</strong> out of {questions.length}</p>
            <button className="btn-restart" onClick={shuffleQuestions}>Restart & Shuffle</button>
          </div>
        ) : (
          questions.length > 0 && (
            <div className="question-content">
              <p style={{ color: "#888", fontSize: "0.85rem" }}>Question {currentQuestion + 1} of {questions.length}</p>
              <h4 style={{ margin: "10px 0 20px 0" }}>{questions[currentQuestion].q}</h4>
              <div className="opt-list">
                {questions[currentQuestion].options.map((option, idx) => (
                  <button 
                    key={idx} 
                    className="opt-button"
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

export default EnglishJuniorHigh;