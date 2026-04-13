import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const soal = [
  {
    q: "Which word is a color?",
    opts: ["Cat", "Blue", "Book", "Father"],
    ans: 1,
    explain: "'Blue' is a color. Cat is an animal, book is a classroom object, and father is a family member."
  },
  {
    q: "How do you greet someone in the morning?",
    opts: ["Good night", "Good evening", "Good morning", "Goodbye"],
    ans: 2,
    explain: "'Good morning' is the correct greeting used in the morning."
  },
  {
    q: "Which sentence is correct?",
    opts: ["This are a cat.", "This is a cat.", "This is a cats.", "These is a cat."],
    ans: 1,
    explain: "'This is a cat.' is correct. We use 'This is' for a single object."
  },
  {
    q: "Which one is an imperative sentence (command)?",
    opts: ["I sit down.", "Are you sitting?", "Sit down!", "He sits down."],
    ans: 2,
    explain: "'Sit down!' is an imperative sentence. It gives a command or instruction."
  },
  {
    q: "What is the opposite of 'big'?",
    opts: ["Long", "Happy", "Small", "Sad"],
    ans: 2,
    explain: "'Small' is the opposite (antonym) of 'big'. These are basic adjectives used to describe things."
  }
];

const materi = [
  {
    section: "Vocabulary (Basic Words)",
    topics: [
      { label: "Family", desc: "Father, mother, brother, sister — common family member words." },
      { label: "Colors & Animals", desc: "Red, blue, cat, dog — everyday words to connect English with real life." },
      { label: "Numbers & Objects", desc: "Numbers and classroom objects like book, pen, and bag." },
    ],
  },
  {
    section: "Greetings & Simple Sentences",
    topics: [
      { label: "Greetings", desc: "'Hello', 'Hi', 'Good morning', 'Good afternoon' — polite expressions." },
      { label: "Introductions", desc: "'What is your name?' — 'My name is …' to introduce yourself." },
      { label: "Simple Sentences", desc: "'This is a cat.' / 'I like apples.' / 'I don't like milk.'" },
    ],
  },
  {
    section: "Commands & Adjectives",
    topics: [
      { label: "Imperative", desc: "Classroom commands: 'Stand up.', 'Sit down.', 'Be quiet.'" },
      { label: "Adjectives", desc: "Describe things using big/small, long/short, happy/sad." },
      { label: "Examples", desc: "'The cat is big.' / 'She is happy.' — adjectives in real sentences." },
    ],
  },
];

const st = {
  wrap: { padding: "20px", maxWidth: "700px", margin: "0 auto", fontFamily: "sans-serif" },
  card: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", overflow: "hidden", marginBottom: "16px" },
  cardHeader: { background: "#FFF7ED", padding: "14px 18px", display: "flex", alignItems: "center", gap: "12px" },
  avatar: { width: "36px", height: "36px", borderRadius: "50%", background: "#C2410C", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", flexShrink: 0 },
  headerTitle: { fontSize: "15px", fontWeight: "600", color: "#7C2D12" },
  headerSub: { fontSize: "12px", color: "#C2410C" },
  cardBody: { padding: "14px 18px" },
  secLabel: { fontSize: "11px", fontWeight: "600", color: "#888", textTransform: "uppercase", letterSpacing: "0.5px", paddingBottom: "8px", borderBottom: "1px solid #eee", marginBottom: "10px" },
  topicGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "8px", marginBottom: "14px" },
  topic: { background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "10px 12px" },
  badge: { display: "inline-block", background: "#FED7AA", color: "#7C2D12", fontSize: "11px", padding: "2px 8px", borderRadius: "99px", marginBottom: "5px" },
  topicDesc: { fontSize: "12px", color: "#555", lineHeight: "1.5", margin: 0 },
  quizHeader: { background: "#EAF3DE", padding: "14px 18px", display: "flex", alignItems: "center", gap: "12px" },
  quizAvatar: { width: "36px", height: "36px", borderRadius: "50%", background: "#3B6D11", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 },
  quizTitle: { fontSize: "15px", fontWeight: "600", color: "#27500A" },
  quizSub: { fontSize: "12px", color: "#3B6D11" },
  quizBody: { padding: "18px" },
  progressBar: { height: "4px", background: "#e5e7eb", borderRadius: "99px", marginBottom: "18px", overflow: "hidden" },
  qNum: { fontSize: "11px", color: "#888", marginBottom: "6px" },
  qText: { fontSize: "15px", fontWeight: "600", color: "#111", marginBottom: "14px", lineHeight: "1.5" },
  options: { display: "flex", flexDirection: "column", gap: "8px" },
  btnNext: { background: "#C2410C", color: "white", border: "none", padding: "8px 20px", borderRadius: "8px", fontSize: "14px", cursor: "pointer", marginTop: "16px" },
  btnRetry: { background: "#f3f4f6", border: "1px solid #e5e7eb", padding: "8px 20px", borderRadius: "8px", fontSize: "14px", cursor: "pointer", marginTop: "12px" },
  result: { textAlign: "center", padding: "24px 0" },
  resultScore: { fontSize: "42px", fontWeight: "700", color: "#C2410C" },
  resultLabel: { fontSize: "13px", color: "#888", marginBottom: "12px" },
  resultMsg: { fontSize: "14px", color: "#333", marginBottom: "20px" },
};

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function getOptStyle(i, ans, selected, answered) {
  const base = { border: "1px solid #e5e7eb", borderRadius: "8px", padding: "10px 14px", fontSize: "14px", background: "#f9fafb", cursor: answered ? "default" : "pointer", textAlign: "left", width: "100%" };
  if (!answered) return base;
  if (i === ans) return { ...base, background: "#EAF3DE", borderColor: "#639922", color: "#27500A" };
  if (i === selected) return { ...base, background: "#FCEBEB", borderColor: "#E24B4A", color: "#791F1F" };
  return { ...base, color: "#aaa" };
}

export default function EnglishMateriDetail() {
  const { state } = useLocation();
  const { id } = useParams();

  const [questions, setQuestions] = useState(() => shuffle(soal));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [done, setDone] = useState(false);

  const pilih = (i) => {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    if (i === questions[current].ans) setScore((s) => s + 1);
  };

  const next = () => {
    if (current + 1 >= questions.length) { setDone(true); return; }
    setCurrent((c) => c + 1);
    setSelected(null);
    setAnswered(false);
  };

  const restart = () => {
    setQuestions(shuffle(soal));
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setAnswered(false);
    setDone(false);
  };

  const progress = done ? 100 : (current / questions.length) * 100;
  const q = questions[current];

  return (
    <div style={st.wrap}>
      {/* MATERI */}
      <div style={st.card}>
        <div style={st.cardHeader}>
          <div style={st.avatar}>ENG</div>
          <div>
            <div style={st.headerTitle}>{state?.title || "English — Elementary School"}</div>
            <div style={st.headerSub}>Basic vocabulary and simple sentence structures (Grade 1–6)</div>
          </div>
        </div>
        <div style={st.cardBody}>
          {materi.map((m, mi) => (
            <div key={mi}>
              <div style={st.secLabel}>{m.section}</div>
              <div style={st.topicGrid}>
                {m.topics.map((t, ti) => (
                  <div key={ti} style={st.topic}>
                    <span style={st.badge}>{t.label}</span>
                    <p style={st.topicDesc}>{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KUIS */}
      <div style={st.card}>
        <div style={st.quizHeader}>
          <div style={st.quizAvatar}>?</div>
          <div>
            <div style={st.quizTitle}>Mini Quiz</div>
            <div style={st.quizSub}>5 questions — Elementary English</div>
          </div>
        </div>
        <div style={st.quizBody}>
          <div style={st.progressBar}>
            <div style={{ height: "100%", width: `${progress}%`, background: "#639922", borderRadius: "99px", transition: "width 0.3s" }} />
          </div>

          {done ? (
            <div style={st.result}>
              <div style={st.resultScore}>{score}/5</div>
              <div style={st.resultLabel}>Correct answers</div>
              <div style={st.resultMsg}>
                {score === 5 ? "Perfect score! Amazing!" : score >= 3 ? "Good job! Keep it up!" : "Don't give up, try again!"}
              </div>
              <button style={st.btnRetry} onClick={restart}>Try Again</button>
            </div>
          ) : (
            <>
              <div style={st.qNum}>Question {current + 1} of {questions.length}</div>
              <div style={st.qText}>{q.q}</div>
              <div style={st.options}>
                {q.opts.map((o, i) => (
                  <button key={i} style={getOptStyle(i, q.ans, selected, answered)} onClick={() => pilih(i)} disabled={answered}>
                    {o}
                  </button>
                ))}
              </div>

              {answered && (
                <div style={{ marginTop: "12px", padding: "10px 12px", borderRadius: "8px", fontSize: "13px", lineHeight: "1.5", background: selected === q.ans ? "#EAF3DE" : "#FCEBEB", color: selected === q.ans ? "#27500A" : "#791F1F" }}>
                  {selected === q.ans ? "✓ Correct! " : "✗ Not quite. "}{q.explain}
                </div>
              )}

              {answered && (
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button style={st.btnNext} onClick={next}>
                    {current < questions.length - 1 ? "Next Question →" : "See Result"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}