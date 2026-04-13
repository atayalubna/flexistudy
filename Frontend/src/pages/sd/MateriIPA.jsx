import { useState, useEffect } from "react";

// ===================== DATA MATERI =====================
const materiData = [
  {
    id: "makhluk-hidup",
    icon: "🌿",
    title: "Makhluk Hidup & Lingkungannya",
    color: "#2d7a4f",
    bg: "#e8f5ee",
    topics: [
      {
        label: "Ciri-ciri Makhluk Hidup",
        desc: "Bernapas, makan, tumbuh, bergerak, berkembang biak, peka terhadap rangsang, dan mengeluarkan zat sisa.",
      },
      {
        label: "Metamorfosis",
        desc: "Metamorfosis sempurna: telur → larva → pupa → dewasa (kupu-kupu). Metamorfosis tidak sempurna: telur → nimfa → dewasa (belalang).",
      },
      {
        label: "Bagian Tumbuhan",
        desc: "Akar (menyerap air & mineral), batang (penopang & pengangkut), daun (fotosintesis), bunga (perkembangbiakan), buah & biji (penyebar keturunan).",
      },
    ],
  },
  {
    id: "wujud-benda",
    icon: "💧",
    title: "Wujud Benda",
    color: "#1565c0",
    bg: "#e3f2fd",
    topics: [
      {
        label: "Tiga Wujud Benda",
        desc: "Padat: bentuk & volume tetap. Cair: volume tetap, bentuk mengikuti wadah. Gas: bentuk & volume mengisi ruangan.",
      },
      {
        label: "Perubahan Wujud",
        desc: "Mencair (padat→cair), membeku (cair→padat), menguap (cair→gas), mengembun (gas→cair), menyublim (padat→gas).",
      },
      {
        label: "Contoh Sehari-hari",
        desc: "Es batu mencair, air mendidih menjadi uap, embun pagi hari di daun, lilin meleleh saat dinyalakan.",
      },
    ],
  },
  {
    id: "energi",
    icon: "⚡",
    title: "Energi dan Perubahannya",
    color: "#e65100",
    bg: "#fff3e0",
    topics: [
      {
        label: "Sumber Energi",
        desc: "Matahari (sumber utama), listrik, angin, air (PLTA), dan makanan sebagai sumber energi bagi tubuh.",
      },
      {
        label: "Kegunaan Energi",
        desc: "Energi matahari → fotosintesis & cahaya. Energi listrik → lampu, kipas, TV. Energi angin → kincir angin.",
      },
      {
        label: "Gaya (Tarikan & Dorongan)",
        desc: "Gaya adalah tarikan atau dorongan. Gaya dapat mengubah bentuk, gerak, dan arah benda. Contoh: mendorong meja, menarik laci.",
      },
    ],
  },
  {
    id: "tata-surya",
    icon: "🪐",
    title: "Tata Surya",
    color: "#4a148c",
    bg: "#f3e5f5",
    topics: [
      {
        label: "Matahari sebagai Pusat",
        desc: "Matahari adalah bintang dan pusat tata surya. Semua planet, termasuk Bumi, berevolusi mengelilingi matahari.",
      },
      {
        label: "Bumi sebagai Planet",
        desc: "Bumi adalah planet ketiga dari matahari. Bumi berotasi (siang-malam) dan berevolusi (pergantian musim/tahun).",
      },
      {
        label: "Fase Bulan",
        desc: "Bulan baru → sabit → setengah → cembung → purnama → cembung → setengah → sabit → bulan baru. Siklus ±29,5 hari.",
      },
    ],
  },
];

// ===================== SOAL KUIS =====================
const allQuestions = [
  {
    q: "Apa yang membedakan makhluk hidup dari benda mati?",
    options: ["Bisa bergerak dan tumbuh", "Berwarna-warni", "Terbuat dari alam", "Berukuran besar"],
    answer: 0,
  },
  {
    q: "Hewan mana yang mengalami metamorfosis sempurna?",
    options: ["Belalang", "Kupu-kupu", "Kecoa", "Jangkrik"],
    answer: 1,
  },
  {
    q: "Bagian tumbuhan yang berfungsi menyerap air dan mineral dari tanah adalah...",
    options: ["Daun", "Bunga", "Akar", "Batang"],
    answer: 2,
  },
  {
    q: "Benda cair memiliki sifat...",
    options: ["Bentuk dan volume tetap", "Bentuk tetap, volume berubah", "Volume tetap, bentuk mengikuti wadah", "Mengisi seluruh ruangan"],
    answer: 2,
  },
  {
    q: "Perubahan wujud dari cair menjadi gas disebut...",
    options: ["Membeku", "Mengembun", "Mencair", "Menguap"],
    answer: 3,
  },
  {
    q: "Sumber energi utama di Bumi adalah...",
    options: ["Angin", "Air", "Matahari", "Listrik"],
    answer: 2,
  },
  {
    q: "Gaya adalah...",
    options: ["Bentuk energi panas", "Tarikan atau dorongan pada benda", "Perubahan wujud benda", "Sumber cahaya alami"],
    answer: 1,
  },
  {
    q: "Planet yang menjadi tempat tinggal manusia adalah...",
    options: ["Mars", "Venus", "Jupiter", "Bumi"],
    answer: 3,
  },
  {
    q: "Matahari dalam tata surya berperan sebagai...",
    options: ["Planet terbesar", "Satelit alami", "Pusat tata surya", "Asteroid"],
    answer: 2,
  },
  {
    q: "Fase bulan yang tampak bulat penuh disebut...",
    options: ["Bulan sabit", "Bulan purnama", "Bulan baru", "Bulan cembung"],
    answer: 1,
  },
  {
    q: "Proses makhluk hidup menghasilkan keturunan disebut...",
    options: ["Bernapas", "Bertumbuh", "Berkembang biak", "Bergerak"],
    answer: 2,
  },
  {
    q: "Es batu yang mencair adalah contoh perubahan wujud dari...",
    options: ["Cair ke gas", "Gas ke padat", "Padat ke cair", "Gas ke cair"],
    answer: 2,
  },
  {
    q: "Energi listrik digunakan untuk menyalakan...",
    options: ["Kincir angin", "Lampu rumah", "Tumbuhan", "Bulan"],
    answer: 1,
  },
  {
    q: "Rotasi Bumi menyebabkan terjadinya...",
    options: ["Pergantian musim", "Siang dan malam", "Fase bulan", "Gerhana matahari"],
    answer: 1,
  },
  {
    q: "Bagian tumbuhan yang berfungsi untuk fotosintesis adalah...",
    options: ["Akar", "Bunga", "Daun", "Biji"],
    answer: 2,
  },
];

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// ===================== KOMPONEN KUIS =====================
function Kuis() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [confirmed, setConfirmed] = useState(false);

  const start = () => {
    const picked = shuffle(allQuestions).slice(0, 8);
    setQuestions(picked);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDone(false);
    setAnswers([]);
    setConfirmed(false);
  };

  useEffect(() => {
    start();
  }, []);

  const handleSelect = (idx) => {
    if (confirmed) return;
    setSelected(idx);
  };

  const handleConfirm = () => {
    if (selected === null) return;
    const correct = selected === questions[current].answer;
    setConfirmed(true);
    setAnswers((prev) => [...prev, { selected, correct }]);
    if (correct) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setConfirmed(false);
    }
  };

  if (!questions.length) return null;

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div style={{ padding: "0 16px 24px" }}>
        <div style={{ textAlign: "center", padding: "28px 16px" }}>
          <div style={{ fontSize: 56, marginBottom: 8 }}>
            {pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "💪"}
          </div>
          <div style={{ fontSize: 28, fontWeight: 800, color: "#1a1a1a" }}>
            {score} / {questions.length}
          </div>
          <div style={{ fontSize: 15, color: "#555", marginTop: 4 }}>
            {pct >= 80
              ? "Luar biasa! Kamu sangat hebat!"
              : pct >= 60
              ? "Bagus! Terus semangat belajar!"
              : "Jangan menyerah! Coba lagi ya!"}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
          {questions.map((q, i) => {
            const a = answers[i];
            return (
              <div
                key={i}
                style={{
                  background: a.correct ? "#e8f5ee" : "#fdecea",
                  border: `1px solid ${a.correct ? "#a5d6b7" : "#f5c6cb"}`,
                  borderRadius: 10,
                  padding: "10px 14px",
                  fontSize: 13,
                }}
              >
                <div style={{ fontWeight: 600, color: "#333", marginBottom: 2 }}>
                  {i + 1}. {q.q}
                </div>
                <div style={{ color: a.correct ? "#2d7a4f" : "#c62828" }}>
                  {a.correct ? "✅ Benar" : `❌ Salah — Jawaban: ${q.options[q.answer]}`}
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={start}
          style={{
            width: "100%",
            background: "#2d7a4f",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            padding: "13px",
            fontSize: 15,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          🔄 Acak Soal & Mulai Lagi
        </button>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div style={{ padding: "0 16px 24px" }}>
      <div style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>
        Soal {current + 1} dari {questions.length}
      </div>
      {/* Progress bar */}
      <div style={{ background: "#eee", borderRadius: 99, height: 6, marginBottom: 16 }}>
        <div
          style={{
            background: "#2d7a4f",
            height: "100%",
            borderRadius: 99,
            width: `${((current) / questions.length) * 100}%`,
            transition: "width 0.3s",
          }}
        />
      </div>
      <div style={{ fontSize: 17, fontWeight: 700, color: "#1a1a1a", marginBottom: 16, lineHeight: 1.4 }}>
        {q.q}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
        {q.options.map((opt, i) => {
          let bg = "#fff";
          let border = "1.5px solid #e0e0e0";
          let color = "#222";
          if (confirmed) {
            if (i === q.answer) { bg = "#e8f5ee"; border = "2px solid #2d7a4f"; color = "#2d7a4f"; }
            else if (i === selected && i !== q.answer) { bg = "#fdecea"; border = "2px solid #e53935"; color = "#e53935"; }
          } else if (selected === i) {
            bg = "#e3f2fd"; border = "2px solid #1565c0"; color = "#1565c0";
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              style={{
                background: bg, border, color, borderRadius: 10,
                padding: "13px 16px", fontSize: 14, textAlign: "left",
                cursor: confirmed ? "default" : "pointer", fontWeight: selected === i ? 600 : 400,
                transition: "all 0.15s",
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {!confirmed ? (
        <button
          onClick={handleConfirm}
          disabled={selected === null}
          style={{
            width: "100%", background: selected !== null ? "#1565c0" : "#ccc",
            color: "#fff", border: "none", borderRadius: 10, padding: "13px",
            fontSize: 15, fontWeight: 700, cursor: selected !== null ? "pointer" : "default",
          }}
        >
          Konfirmasi Jawaban
        </button>
      ) : (
        <button
          onClick={handleNext}
          style={{
            width: "100%", background: "#2d7a4f", color: "#fff",
            border: "none", borderRadius: 10, padding: "13px",
            fontSize: 15, fontWeight: 700, cursor: "pointer",
          }}
        >
          {current + 1 >= questions.length ? "Lihat Hasil →" : "Soal Berikutnya →"}
        </button>
      )}
    </div>
  );
}

// ===================== MAIN COMPONENT =====================
export default function IPASDMateriDetail() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div style={{ fontFamily: "'Nunito', 'Segoe UI', sans-serif", maxWidth: 680, margin: "0 auto", background: "#f5f7fa", minHeight: "100vh", paddingBottom: 32 }}>
      {/* HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 60%, #43a047 100%)",
        padding: "24px 20px 20px",
        color: "#fff",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, fontWeight: 900, color: "#fff",
          }}>SD</div>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>IPA — Ilmu Pengetahuan Alam</div>
            <div style={{ fontSize: 13, opacity: 0.85 }}>Materi IPA Tingkat SD · Kurikulum Merdeka</div>
          </div>
        </div>
      </div>

      {/* MATERI SECTIONS */}
      <div style={{ padding: "20px 16px 8px" }}>
        {materiData.map((section) => (
          <div key={section.id} style={{ marginBottom: 20 }}>
            {/* Section Header */}
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: 1.2,
              color: "#888", textTransform: "uppercase", marginBottom: 10,
            }}>
              {section.icon} {section.title.toUpperCase()}
            </div>

            {/* Topic Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
              {section.topics.map((topic, i) => (
                <button
                  key={i}
                  onClick={() =>
                    setActiveSection(
                      activeSection === `${section.id}-${i}` ? null : `${section.id}-${i}`
                    )
                  }
                  style={{
                    background: activeSection === `${section.id}-${i}` ? section.bg : "#fff",
                    border: activeSection === `${section.id}-${i}`
                      ? `2px solid ${section.color}`
                      : "1.5px solid #e5e7eb",
                    borderRadius: 12, padding: "12px 14px", textAlign: "left",
                    cursor: "pointer", transition: "all 0.18s",
                  }}
                >
                  <div style={{
                    display: "inline-block",
                    background: section.bg,
                    color: section.color,
                    fontSize: 12, fontWeight: 700,
                    borderRadius: 6, padding: "2px 8px", marginBottom: 6,
                  }}>
                    {topic.label}
                  </div>
                  <div style={{
                    fontSize: 13, color: "#555", lineHeight: 1.5,
                    maxHeight: activeSection === `${section.id}-${i}` ? 200 : 60,
                    overflow: "hidden", transition: "max-height 0.3s",
                  }}>
                    {topic.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* DIVIDER */}
      <div style={{ margin: "8px 16px 20px", borderTop: "1.5px solid #e5e7eb" }} />

      {/* KUIS SECTION */}
      <div style={{ margin: "0 16px", background: "#fff", borderRadius: 16, border: "1.5px solid #e5e7eb", overflow: "hidden" }}>
        {/* Kuis Header */}
        <div style={{
          background: "linear-gradient(90deg, #e8f5ee, #f0fdf4)",
          padding: "14px 16px",
          display: "flex", alignItems: "center", gap: 12,
          borderBottom: "1.5px solid #e5e7eb",
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "#2d7a4f", color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18,
          }}>?</div>
          <div>
            <div style={{ fontWeight: 800, color: "#1a1a1a", fontSize: 15 }}>Kuis Singkat</div>
            <div style={{ fontSize: 12, color: "#666" }}>8 soal acak IPA SD · Soal diacak setiap sesi</div>
          </div>
        </div>

        <Kuis />
      </div>
    </div>
  );
}