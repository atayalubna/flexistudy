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
          background-color: #ffffff;
          padding: 25px;
          border-radius: 15px;
          border: 2px dashed #fefefe;
          margin-bottom: 30px;
          text-align: center;
        }
        .section-main {
          font-size: 1.6rem;
          color: #ffffff;
          border-bottom: 3px solid #ffffff;
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
          Topik: {state?.topic || "Materi Bahasa Indonesia"} | ID: {id || "SD-Bahasa Indonesia-001"}
        </p>
      </div>

      <h1 className="section-main">MATERI TINGKAT SD</h1>

      <div className="grid-materi">
        {/* Materi 1 */}
        <div className="card-materi">
          <h4 className="card-title">Pengenalan Huruf & Suku Kata</h4>
          <p className="content-text">
            <br/>
            note : kamu bisa gunakan fitur Text To Speeach untuk belajar lebih lanjut mengenai bagaimana pengucapan huruf yang benar. SEMANGAT BELAJAR
            <br/>
            <br/>
            <strong>Apa Itu Huruf?</strong>
            <br/>
            Huruf adalah simbol atau tanda yang digunakan untuk membentuk kata.
            Tanpa huruf, kita tidak bisa membaca atau menulis.
            <br/>
            Dalam Bahasa Indonesia, terdapat 26 huruf alfabet, mulai dari A sampai Z.
            <br/>
            Contoh Huruf:
            <br/>
            A, B, C, D, E, F, G, dan seterusnya.
            <br/>
            <br/>
            Huruf dibagi menjadi dua jenis, yaitu:
            <br/>
            1. Huruf Vokal
            <br/>
            Huruf vokal adalah huruf yang bisa dibunyikan tanpa bantuan huruf lain.
            <bvr/>
            Huruf vokal terdiri dari:
            <ul>
              <li>A</li>
              <li>I</li>
              <li>U</li>
              <li>E</li>
              <li>O</li>
            </ul>
            <br></br>
            Contoh:
            <ul>
              <li>A → ada pada kata Ayam</li>
              <li>I → ada pada kata Ikan</li>
              <li>U → ada pada kata Ular</li>
            </ul>
            <br/>
            Pengertian Contoh: 
            <br/>
            Pada kata Ayam, huruf A dibaca jelas tanpa bantuan huruf lain.
            Karena itu, A disebut huruf vokal.
            <br/>
            <br/>
            2. Huruf Konsonan
            <br/>
            Huruf konsonan adalah huruf yang biasanya membutuhkan bantuan huruf vokal agar mudah dibaca.
            <br/>
            B, C, D, F, G, H, J, K, dan lainnya.
            <br/>
            <br/>
            Contoh:
            <ul>
              <li>B + A = BA</li>
              <li>C + I = CI</li>
              <li>D + U = DU</li>
            </ul>
            <br/>
            Pengertian Contoh:
          <br/>
          Huruf B sendiri sulit dibaca dengan jelas.
          Tetapi ketika digabung dengan huruf vokal A menjadi BA, bunyinya jadi jelas.
          <br/>
          <br/>
          <strong>Mengenal Bunyi Huruf</strong>
          <br/>
          Setiap huruf memiliki bunyi yang berbeda.
          <br/>
          Contoh:
          <ul>
            <li>A dibaca “a”</li>
            <li>B dibaca “be”</li>
            <li>C dibaca “ce”</li>
          </ul>
          <br/>
          Bunyi huruf membantu kita membaca kata dengan benar.
          <br/>
          <br/>
          Contoh: Kata "BOLA"
          <br/>
          Cara membaca:
          <ul>
            <li>BO</li>
            <li>LA</li>
          </ul>
          <br/>
          Digabung menjadi: BO-LA
          <br/>
          Pengertian Contoh:
          <br/>
          Kata “bola” terdiri dari dua bagian bunyi, yaitu BO dan LA.
          Agar mudah membaca, kata biasanya dipisahkan menjadi beberapa bunyi kecil.
          <br/>
          <br/>
          <strong>Apa Itu Suku Kata?</strong>
          <br/>
          Suku kata adalah gabungan huruf yang menghasilkan satu bunyi.
          <br/>
          Biasanya suku kata terdiri dari:
          <ul>
            <li>Huruf konsonan + huruf vokal atau</li>
            <li>Huruf vokal saja</li>
          </ul>
          <br/>
          Contoh Suku Kata:
          <ul>
            <li>BA</li>
            <li>BI</li>
            <li>KU</li>
            <li>ME</li>
            <li>KO</li>
          </ul>
          <br/>
          Contoh dalam Kata
          <br/>
          Kata: BUKU
          <br/>
          Dipisah menjadi:
          <ul>
            <li>BU</li>
            <li>KU</li>
          </ul>
          <br/>
          Jadi, kata “BUKU” memiliki 2 suku kata.
          <br/>
          Pengertian Contoh:
          <br/>
          Kata “BUKU” dibaca per bagian agar lebih mudah:
          <br/>
          <ul>
            <li>BU</li>
            <li>KU</li>
          </ul>
          <br/>
          digabung: BUKU
          <br/>
          Kata: SEPEDA
          <br/>
          Dipisah menjadi:
          <ul>
            <li>SE</li>
            <li>PE</li>
            <li>DA</li>
          </ul>
          Jadi, kata “SEPEDA” memiliki 3 suku kata.
          <br/>
          Pengertian Contoh:
          <br/>
          Setiap bagian memiliki bunyi sendiri:
          <ul>
            <li>SE</li>
            <li>PE</li>
            <li>DA</li>
          </ul>
          <br/>
          Saat digabung, bunyinya menjadi kata lengkap “SEPEDA”.
          <br/>
          <br/>
          <strong>Cara Mudah Membaca Suku Kata</strong>
          <br/>
          Agar mudah membaca, kita bisa belajar dari suku kata sederhana terlebih dahulu.
          <br/>
           Pola Dasar
          <br/>
          Huruf B
          <ul>
            <li>BA</li>
            <li>BI</li>
            <li>BU</li>
            <li>BE</li>
            <li>BO</li>
          </ul>
          <br/>
          Huruf C
           <ul>
            <li>CA</li>
            <li>CI</li>
            <li>CU</li>
            <li>CE</li>
            <li>CO</li>
          </ul>
          <br/>
          dan huruf huruf lainnya
          <br/>
          <br/>
          <strong>Tips Mudah Belajar Huruf & Suku Kata</strong>
          <br/>
           1. Belajar Sedikit Demi Sedikit
          <br/>
          Jangan langsung menghafal semuanya.
          Mulailah dari huruf vokal terlebih dahulu.
          <br/>
          2. Sering Membaca Keras
          <br/>
          Membaca dengan suara keras membantu otak mengingat bunyi huruf.
          <br/>
          Contoh:
          <br/>
          BA — BI — BU — BE — BO
          <br/>
          3. Gunakan Benda di Sekitar
          <br/>
          Belajar akan lebih mudah jika menggunakan benda nyata.
          <br/>
          Contoh:
          <ul>
            <li>Buku → BU-KU</li>
            <li>Meja → ME-JA</li>
            <li>Sapu → SA-PU</li>
          </ul>
          <br/>
          Pengertian Contoh:
          <br/>
          Kita bisa belajar suku kata dari nama benda yang sering dilihat sehari-hari.
          <br/>
          <br/>
           Kesimpulan
           <ul>
            <li>Huruf adalah dasar dari membaca dan menulis.</li>
            <li>Huruf terdiri dari huruf vokal dan konsonan.</li>
            <li>Suku kata adalah gabungan huruf yang menghasilkan bunyi.</li>
            <li>Kata dapat dipisahkan menjadi beberapa suku kata agar lebih mudah dibaca.</li>
            <li>emakin sering berlatih membaca, semakin cepat kita memahami huruf dan suku kata.</li>
           </ul>
          </p>
        </div>

        {/* Materi 2 */}
        <div className="card-materi" style={{ borderColor: "#228be6" }}>
          <h4 className="card-title" style={{ color: "#1c7ed6" }}>Pemahaman Teks</h4>
          <p className="content-text">
            <br/>
            <strong>Apa Itu Pemahaman Teks?</strong>
            <br/>
            Pemahaman teks adalah kemampuan untuk membaca lalu memahami isi bacaan.
            <br/>
            <br/>
            Saat memahami teks, kita tidak hanya membaca kata-katanya saja, tetapi juga mengetahui:
            <br/>
            <br/>
            <ul>
              <li>Isi cerita atau bacaan</li>
              <li>Pesan yang disampaikan</li>
              <li>Informasi penting dalam teks</li>
            </ul>
            <br/>
            Contoh Teks :
            <br/>
          “Rina pergi ke perpustakaan untuk meminjam buku cerita.”
          <br/>
          <br/>
          Pertanyaan:
          <br/>
          Ke mana Rina pergi?
          <br/>
          <br/>
          Jawaban:
          <br/>
          Rina pergi ke perpustakaan.
          <br/>
          <br/>
          Pengertian Contoh:
          <br/>
          Kita bisa mengetahui informasi penting dari bacaan dengan membaca secara teliti.
          <br/>
          <br/>
          <strong>Mengapa Pemahaman Teks Itu Penting?</strong>
          <br/>
          Pemahaman teks membantu kita:
          <br/>
          <br/>
          <ul>
            <li>Mengerti isi bacaan</li>
            <li>Menjawab pertanyaan</li>
            <li>Menambah pengetahuan</li>
            <li>Belajar lebih mudah</li>
          </ul>
          <br/>
          Jika hanya membaca tanpa memahami, kita akan sulit mengetahui maksud bacaan.
          <br/>
          <br/>
          Contoh :
          <br/>
            Teks: “Budi membawa payung karena cuaca mendung.”
            <br/>
            <br/>
            Pertanyaan:
            <br/>
            Mengapa Budi membawa payung?
            <br/>
            <br/>
            Jawaban:
            <br/>
            Karena cuaca mendung.
            <br/>
            <br/>
            Pengertian Contoh:
            <br/>
            Dari teks tersebut, kita memahami alasan Budi membawa payung.
            <br/>
            <br/>
            <strong>Cara Memahami Teks dengan Mudah</strong>
            <br/>
            Ada beberapa cara agar lebih mudah memahami teks.
            <br/>
            <br/>
            1. Membaca dengan Teliti
            <br/>
            Jangan membaca terlalu cepat.
            <br/>
            <br/>
            Contoh:
            <br/>
            “Siti menyiram bunga setiap pagi.”
            <br/>
            <br/>
            Pengertian Contoh:
            <br/>
            Jika dibaca teliti, kita tahu bahwa kegiatan Siti dilakukan setiap pagi.
            <br/>
            <br/>
            2. Menemukan Informasi Penting
            <br/>
            Cari informasi penting seperti:
            <br/>
            <br/>
            <ul>
            <li>Siapa</li>
            <li>Apa</li>
            <li>Di mana</li>
            <li>Kapan</li>
            </ul>
            <br/>
            Contoh
            <br/>
            “Adi bermain bola di lapangan sekolah pada sore hari.”
            <br/>
            Informasi Penting:
            <br/>
            <br/>
            <ul>
            <li>Siapa → Adi</li>
            <li>Apa → bermain bola</li>
            <li>Di mana → lapangan sekolah</li>
            <li>Kapan → sore hari</li>
            </ul>
            <br/>
            Pengertian Contoh:
            <br/>
            Dengan mencari informasi penting, isi teks jadi lebih mudah dipahami.
            <br/>
            <br/>
            <strong>Memahami Ide Pokok</strong>
            <br/>
            Ide pokok adalah inti atau gagasan utama dalam sebuah teks.
            <br/>
            <br/>
            Biasanya ide pokok menjelaskan hal yang paling penting.
            <br/>
            <br/>
            Contoh Teks
            <br/>
            “Kelinci adalah hewan yang suka melompat. Hewan ini memiliki telinga panjang dan bulu yang lembut.”
            <br/>
            <br/>
            Ide Pokok:
            <br/>
            Kelinci adalah hewan yang suka melompat.
            <br/>
            <br/>
            Pengertian Contoh:
            <br/>
            Kalimat pertama menjelaskan inti pembahasan tentang kelinci.
            <br/>
            <br/>
            <strong>Memahami Pesan dalam Teks</strong>
            <br/>
            Beberapa teks memiliki pesan atau amanat.
            <br/>
            Pesan biasanya mengajarkan hal baik kepada pembaca.
            <br/>
            <br/>
            Contoh Teks
            <br/>
            “Doni selalu membantu temannya yang kesulitan.”
            <br/>
            <br/>
            Pesan:
            <br/>
            Kita harus suka menolong.
            <br/>
            <br/>
            Pengertian Contoh:
            <br/>
            Dari tindakan Doni, kita belajar pentingnya membantu orang lain.
            <br/>
            <br/>
            <strong>Memahami Teks Cerita Sederhana</strong>
            <br/>
            Saat membaca cerita, kita perlu memahami:
            <br/>
            <br/>
            <ul>
              <li>Tokoh</li>
              <li>Tempat</li>
              <li>Kejadian</li>
            </ul>
            <br/>
            Contoh Cerita
            <br/>
            “Tina pergi ke kebun bersama ayahnya. Mereka menanam bunga di pagi hari.”
            <br/>
            <br/>
            Pertanyaan dan Jawaban:
            <br/>
            Siapa yang pergi ke kebun?
              → Tina dan ayahnya.
            <br/>
            Apa yang mereka lakukan?
              → Menanam bunga.
            <br/>
            Kapan mereka melakukannya?
              → Pada pagi hari.
            <br/>
            <br/>
            Pengertian Contoh:
            <br/>
            Pertanyaan membantu kita memahami isi cerita dengan lebih jelas.
            <br/>
            <br/>
            <strong>Cara Menjawab Pertanyaan dari Teks</strong>
            <br/>
            Saat menjawab pertanyaan, baca kembali teks dengan teliti.
            <br/>
            Cari bagian yang berhubungan dengan pertanyaan.
            <br/>
            <br/>
            Contoh Teks:
            <br/>
            “Rudi membeli roti di toko dekat rumah.”
            <br/>
            <br/>
            Pertanyaan:
            <br/>
            Apa yang dibeli Rudi?
            <br/>
            <br/>
            Jawaban:
            <br/>
            Rudi membeli roti.
            <br/>
            <br/>
            Pengertian Contoh:
            <br/>
            Jawaban dapat ditemukan langsung pada teks.
            <br/>
            <br/>
            <strong>Tips Agar Mudah Memahami Bacaan</strong>
            <br/>
             1. Fokus Saat Membaca
            <br/>
            Hindari gangguan agar lebih mudah memahami isi teks.
            <br/>
            <br/>
            2. Membaca Berulang
            <br/>
            Jika belum paham, baca kembali perlahan.
            <br/>
            <br/>
            Contoh:
            <br/>
            Membaca cerita dua kali agar lebih mengerti.
            <br/>
            <br/>
            3. Tandai Informasi Penting
            <br/>
            Bisa menggunakan garis bawah atau catatan kecil.
            <br/>
            <br/>
            Contoh:
            <br/>
            Menandai nama tokoh atau tempat dalam cerita.
            <br/>
            <br/>
            <strong>Kesimpulan</strong>
            <ul>
              <li>Pemahaman teks adalah kemampuan memahami isi bacaan.</li>
              <li>Saat memahami teks, kita mencari informasi penting dan ide pokok.</li>
              <li>Membaca dengan teliti membantu memahami isi teks lebih mudah.</li>
              <li>Pertanyaan dapat membantu menemukan informasi dari bacaan.</li>
              <li>Semakin sering membaca, semakin baik kemampuan memahami teks.</li>
            </ul>
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