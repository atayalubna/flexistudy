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
          background-color: rgb(206, 227, 255);
          padding: 15px 25px;
          border-radius: 10px;
          border-left: 5px solid #2d7dd2;
          margin-bottom: 30px;
        }

        .section-title {
          font-size: 1.2rem;
          color: #455ec1;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
          border-bottom: 1px solid #455ec1;
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
          box-shadow: 0 4px 6px rgba(211, 136, 136, 0.02);
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
          <span className="badge-topic">Materi Kelas 7</span>
          <h4>Teks Deskripsi</h4>
          <p>
            <strong>Apa Itu Teks Deskripsi?</strong> 
            <br/>
            Teks deskripsi adalah teks yang digunakan untuk menggambarkan suatu benda, tempat, hewan, orang, atau suasana dengan jelas.
            <br />
            Tujuan teks deskripsi adalah agar pembaca bisa:
            <br/>
            <ul>
              <li>Membayangkan objek yang dijelaskan</li>
              <li>Merasakan suasana dalam teks</li>
              <li>Mengenali ciri-ciri sesuatu</li>
            </ul>
            <br/>
            Contoh Teks Deskripsi
            <br/>
            “Pantai itu memiliki pasir putih yang lembut dan air laut berwarna biru jernih.”
            <br/>
            <br/>
            Pengertian Contoh:
            <br/>
            Kalimat tersebut menggambarkan keadaan pantai dengan jelas sehingga pembaca bisa membayangkannya.
            <br/>
            <strong>Ciri-ciri Teks Deskripsi</strong> 
            <br/>
            Teks deskripsi memiliki beberapa ciri khusus.
            <br/>
            1. Menggambarkan Sesuatu dengan Jelas
            <br/>
            Teks menjelaskan bentuk, warna, ukuran, atau suasana.
            <br/>
            <br/>
            Contoh:
            <br/>
            “Kucing itu berbulu putih dan memiliki mata hijau.”
            <br/>
            <br/>
            Pengertian Contoh:
            <br/>
            Kalimat tersebut menjelaskan ciri-ciri kucing secara detail.
            <br/>
            <br/>
            2. Menggunakan Kata Sifat
            <br/> 
            Kata sifat membantu memperjelas gambaran objek.
            <br/>
            <br/>
            Contoh Kata Sifat:
            <ul>
              <li>Indah</li>
              <li>Besar</li>
              <li>Bersih</li>
              <li>Wangi</li>
            </ul>
            <br/>
            <br/>
            Contoh:
            <br/>
            “Taman itu sangat indah dan bersih.”
            <br/>
            <br/>
            Pengertian Contoh:
            <br/>
            Kata “indah” dan “bersih” membantu pembaca membayangkan taman.
            <br/>
            <br/>
            3. Membuat Pembaca Seolah-olah Melihat Langsung
            <br/>
            Teks deskripsi dibuat sedetail mungkin.
            <br/>
            <br/>
            Contoh:
            <br/>
            “Udara pagi terasa sejuk dan angin bertiup pelan.”
            <br/>
            <br/>
            Pengertian Contoh:
            <br/>
            Pembaca dapat membayangkan suasana pagi yang nyaman.
            <br/>
            <br/>
            <strong>Jenis Teks Deskripsi</strong>
            <br/>
            1. Deskripsi Orang
            <br/>
            Menggambarkan ciri atau sifat seseorang.
            <br/>
            <br/>
            Contoh:
            <br/>
            “Rani memiliki rambut panjang dan senyum yang ramah.”
            <br/>
            <br/>
            Pengertian Contoh:
            <br/>
            Kalimat tersebut menjelaskan penampilan dan sifat Rani.
            <br/>
            <br/>
            2. Deskripsi Tempat
            <br/>
            Menggambarkan keadaan suatu tempat.
            <br/>
            <br/>
            Contoh:
            <br/>
            “Perpustakaan sekolah sangat tenang dan penuh buku.”
            <br/>
            <br/>
            Pengertian Contoh:
            <br/>
            Pembaca bisa membayangkan suasana perpustakaan.
            <br/>
            <br/>
            3. Deskripsi Hewan atau Benda
            <br/>
            Menjelaskan ciri-ciri hewan atau benda.
            <br/>
            <br/>
            Contoh:
            <br/>
            “Sepeda itu berwarna merah dengan roda besar.”
            <br/>
            <br/>
            Pengertian Contoh:
            <br/>
            Kalimat tersebut menjelaskan bentuk dan warna sepeda.
            <br/>
            <br/>
            <strong>Struktur Teks Deskripsi</strong>
            <br/>
            Teks deskripsi biasanya memiliki dua bagian utama.
            <br/>
            <br/>
             1. Identifikasi
            <br/>
            Bagian yang memperkenalkan objek.
            <br/>
            <br/>
            Contoh:
            <br/>
            “Kucingku bernama Milo.”
            <br/>
            <br/>
              Pengertian Contoh:
            <br/>
              Kalimat ini memperkenalkan objek yang akan dijelaskan.
              <br/>
              <br/>
              2. Deskripsi Bagian
              <br/>
              Bagian yang menjelaskan ciri-ciri objek.
              <br/>
              <br/>
              Contoh:
              <br/>
              “Milo memiliki bulu cokelat lembut dan ekor panjang.”
              <br/>
              <br/>
              Pengertian Contoh:
              <br/>
              Kalimat tersebut menjelaskan detail tentang Milo.
              <br/>
              <br/>
              <strong>Contoh Teks Deskripsi Lengkap</strong>
              <br/>
              “Taman Sekolahku”
              <br/>
              <br/>
              Taman sekolahku sangat indah dan bersih.
              Di taman itu terdapat banyak bunga berwarna-warni.
              Udara di sekitar taman terasa sejuk karena banyak pohon hijau.
              Setiap pagi, burung-burung berkicau dengan merdu.
              <br/>
              <br/>
               Pengertian Teks:
              <br/>
                Teks tersebut menggambarkan suasana taman sekolah dengan detail. Pengertian Teks:
              <br/>
                Teks tersebut menggambarkan suasana taman sekolah dengan detail.
              <br/>
              <br/>
               Ciri-ciri yang terlihat:
               <ul>
                <li>Menggunakan kata sifat → indah, bersih, sejuk</li>
                <li>Menggambarkan suasana</li>
                <li>Membantu pembaca membayangkan taman</li>
               </ul>
               <br/>
               <br/>
               Cara Membuat Teks Deskripsi
               <br/>
               Membuat teks deskripsi cukup mudah jika dilakukan langkah demi langkah.
               <br/>
               <br/>
                Langkah 1 — Tentukan Objek
              <br/>
                Pilih benda, tempat, orang, atau hewan yang ingin dijelaskan.
                <br/>
                <br/>
              Langkah 2 — Perhatikan Ciri-cirinya
              <br/>
              Amati:
              <ul>
                <li>Warna</li>
                <li>Warna</li>
                <li>Ukuran</li>
                <li>Suasana</li>
              </ul>
              <br/>
              <br/>
              Langkah 3 — Gunakan Kata Sifat
              <br/>
              Tambahkan kata yang membuat deskripsi lebih jelas.
              <br/>
              <br/>
              Langkah 4 — Susun Menjadi Paragraf
              <br/>
              Gabungkan kalimat menjadi teks yang rapi.
              <br/>
              <br/>
              <strong>Perbedaan Teks Deskripsi dan Narasi</strong>
              <br/>
              <br/>
              <table border="1">
              <tr>
                <th>Teks Deskripsi </th>
                <th>Teks Narasi</th>
              </tr>
              <tr>
                <td>Menggambarkan sesuatu </td>
                <td>Menceritakan kejadian</td>
              </tr>
              <tr>
                <td>Fokus pada ciri-ciri</td>
                <td>Fokus pada alur cerita</td>
              </tr>
              <tr>
                <td>Banyak kata sifat </td>
                <td>Banyak kegiatan</td>
              </tr>
            </table>
            <br/>
            <strong>Tips Membuat Teks Deskripsi Menarik</strong>
            <br/>
            <br/>
            1. Gunakan Pengamatan yang Jelas
            <br/>
            Perhatikan detail objek.
            <br/>
            <br/>
            2. Gunakan Kata yang Mudah Dipahami
            <br/>
            Hindari kata yang terlalu rumit.
            <br/>
            <br/>
            3. Tambahkan Suasana
            <br/>
            Jelaskan apa yang dirasakan atau dilihat.
            <br/>
            <br/>
            Kesimpulan
            <br/>
            <ul>
              <li>Teks deskripsi digunakan untuk menggambarkan sesuatu dengan jelas.</li>
              <li>Teks deskripsi membantu pembaca membayangkan objek atau suasana.</li>
              <li>Ciri teks deskripsi adalah menggunakan kata sifat dan penjelasan detail.</li>
              <li>Teks deskripsi dapat menggambarkan orang, tempat, hewan, atau benda.</li>
              <li>* Semakin detail penjelasannya, semakin mudah pembaca membayangkan objek tersebut.</li>
            </ul>
          </p>
        </div>

        {/* Kelompok 2 */}
        <div className="card-materi">
          <span className="badge-topic">Materi kelas 8</span>
          <h4>Teks Berita</h4>
          <p>
            <strong>Apa Itu Teks Berita?</strong> 
            <br/>
            Teks berita adalah teks yang berisi informasi tentang suatu peristiwa atau kejadian yang nyata dan penting untuk diketahui banyak orang.
            <br/>
            <br/>
            Berita biasanya disampaikan melalui:
            <ul>
              <li>Televisi</li>
              <li>Surat kabar</li>
              <li>Radio</li>
              <li>Internet</li>
            </ul>
            <br/>
            <br/>
            Tujuan teks berita adalah memberikan informasi yang jelas dan benar kepada pembaca atau pendengar.
            <br/>
            <br/>
            Contoh Sederhana
            <br/>
            “Kerja bakti membersihkan lingkungan dilakukan warga pada Minggu pagi.”
            <br/>
            <br/>
             Pengertian Contoh:
            <br/>
            Kalimat tersebut memberikan informasi tentang kegiatan nyata yang dilakukan warga.
            <br/>
            <br/>
            <strong>Ciri-ciri Teks Berita</strong> 
            <br/>
            Teks berita memiliki beberapa ciri khusus.
            <br/>
            <br/>
            1. Berdasarkan Fakta
            <br/>
            Berita harus benar-benar terjadi.
            <br/>
            <br/>
            Contoh:
            <br/>
            “Sekolah mengadakan lomba kebersihan kelas.”
            <br/>
            <br/>
            Pengertian Contoh:
            <br/>
            Informasi tersebut merupakan kejadian nyata.
            <br/>
            2. Menggunakan Bahasa Jelas
            <br/>
            Bahasa dibuat mudah dipahami.
            <br/>
            <br/>
            3. Memberikan Informasi Penting
            <br/>
            Berita berisi hal yang berguna untuk diketahui banyak orang.
            <br/>
            <br/>
            4. Bersifat Objektif
            <br/>
            Berita tidak boleh berlebihan atau memihak.
            <br/>
            <br/>
            Contoh:
            <br/>
            “Pertandingan berlangsung selama dua jam.”
            <br/>
            <br/>
            Pengertian Contoh:
            <br/>
            Kalimat tersebut menyampaikan fakta tanpa tambahan pendapat pribadi.
            <br/>
            <br/>
            Unsur-unsur Teks Berita
            <br/>
           Dalam berita terdapat unsur penting yang disebut 5W + 1H.
           <br/>
           <br/>
           What (Apa)
          <br/>
          Menjelaskan apa yang terjadi.
          <br/>
          <br/>
          Contoh:
          <br/>
          “Terjadi lomba membaca puisi di sekolah.”
          <br/>
          <br/>
          Pengertian Contoh:
          <br/>
          Bagian ini menjelaskan kejadian utama dalam berita.
          <br/>
          <br/>
          Who (Siapa)
          <br/>   
          Menjelaskan siapa yang terlibat.
          <br/>
          <br/>
          Contoh:
          <br/>
          “Siswa kelas VIII mengikuti lomba.”
          <br/>
          <br/>
          Pengertian Contoh:
          <br/>
          Bagian ini menunjukkan orang yang terlibat dalam peristiwa.
          <br/>
          <br/>
          Where (Di Mana)
          <br/>
          Menjelaskan tempat kejadian.
          <br/>
          <br/>
          Contoh:
          <br/>
          “Lomba diadakan di aula sekolah.”
          <br/>
          <br/>
          Pengertian Contoh:
          <br/>
          Bagian ini menjelaskan lokasi kejadian.
          <br/>
          <br/>
          When (Kapan)
          <br/>
          Menjelaskan waktu kejadian.
          <br/>
          <br/>
          Contoh:
          <br/>
          “Kegiatan berlangsung pada hari Senin.”
          <br/>
          <br/>
          Pengertian Contoh:
          <br/>
          Bagian ini menunjukkan waktu terjadinya peristiwa.
          <br/>
          <br/>
          Why (Mengapa)
          <br/>
          Menjelaskan alasan kejadian.
          <br/>
          <br/>
          Contoh:
          <br/>
          “Lomba diadakan untuk meningkatkan minat membaca siswa.”
          <br/>
          <br/>
          Pengertian Contoh:
          <br/>
          Bagian ini menjelaskan tujuan kegiatan.
          <br/>
          <br/>
          How (Bagaimana)
          <br/>
          Menjelaskan proses atau jalannya kejadian.
          <br/>
          <br/>
          Contoh:
          <br/> 
          “Peserta membaca puisi di depan juri dan penonton.”
          <br/>
          <br/>
          Pengertian Contoh:
          <br/>
          Bagian ini menjelaskan bagaimana kegiatan berlangsung.
          <br/>
          <br/>
          <strong>Struktur Teks Berita</strong>
          <br/>
          Teks berita biasanya memiliki tiga bagian utama.
          <br/>
          1.  Judul Berita
          <br/>
          Judul dibuat singkat dan menarik.
          <br/>
          <br/>
          2. Kepala Berita
          <br/>
          Berisi informasi paling penting.
          <br/>
          <br/>
          3. Isi Berita
          <br/>
          Berisi penjelasan lebih lengkap tentang kejadian.
          <br/>
          <br/>
           <strong> Perbedaan Teks Berita dan Cerita</strong>
           <table border="1">
          <tr>
            <th>Teks Berita</th>
            <th>Cerita </th>
          </tr>
          <tr>
            <td>Berdasarkan fakta</td>
            <td>Bisa khayalan </td>
          </tr>
          <tr>
            <td>Memberikan informasi</td>
            <td>Untuk hiburan</td>
          </tr>
           <tr>
            <td>Bahasa jelas dan singkat</td>
            <td>Bahasa lebih bebas </td>
          </tr>
        </table>
          <br/>
          <br/>
          <strong> Cara Membuat Teks Berita</strong>
          <br/>
          Langkah 1 — Tentukan Peristiwa
          <br/>
          Pilih kejadian nyata.
          <br/>
          Contoh:
          <ul>
            <li>Lomba sekolah</li>
            <li>Kerja bakti</li>
            <li>Pertandingan olahraga</li>
          </ul>
          <br/>
          <br/>
          Langkah 2 — Cari Informasi Penting
          <br/>
          Gunakan unsur 5W + 1H.
          <br/>
          <br/>
          Langkah 3 — Susun Secara Jelas
          <br/>
          Mulai dari informasi paling penting.
          <br/>
          <br/>
          Langkah 4 — Gunakan Bahasa Resmi dan Mudah Dipahami
          <br/>
          Hindari bahasa berlebihan.
          <br/>
          <br/>
          <strong>Tips Membaca Berita</strong>
          <br/>
           1. Perhatikan Judul
          <br/>
          Judul membantu mengetahui isi berita.
          <br/>
          <br/>
          2. Cari Informasi Penting
          <br/>
          Temukan unsur 5W + 1H.
          <br/>
          <br/>
          3. Bedakan Fakta dan Pendapat
          <br/>
          Berita harus berdasarkan fakta.
          <br/>
          <br/>
          <strong>Kesimpulan</strong>
          <ul>
            <li>Teks berita adalah teks yang berisi informasi tentang kejadian nyata.</li>
            <li>Berita harus berdasarkan fakta dan menggunakan bahasa jelas.</li>
            <li>Unsur berita terdiri dari 5W + 1H.</li>
            <li>Struktur berita terdiri dari judul, kepala berita, dan isi berita.</li>
            <li>Teks berita membantu masyarakat mengetahui informasi penting.</li>
          </ul>
          </p>
        </div>

        {/* Kelompok 3 */}
        <div className="card-materi">
          <span className="badge-topic">Materi Kelas 9</span>
          <h4>Teks Laporan Percobaan</h4>
          <p>
            <strong>Apa Itu Teks Laporan Percobaan?</strong> 
            <br/>
            Teks laporan percobaan adalah teks yang berisi penjelasan tentang suatu percobaan yang telah dilakukan.
            <br />
            Percobaan biasanya dilakukan untuk:
            <ul>
              <li>Mengetahui hasil suatu kegiatan</li>
              <li>Membuktikan sesuatu</li>
              <li>Mempelajari proses tertentu</li>
            </ul>
            <br/>
            <br/>
            Teks laporan percobaan dibuat agar orang lain dapat memahami:
            <br/>
             <ul>
              <li>Tujuan percobaan</li>
              <li>Langkah-langkah percobaan</li>
              <li>Hasil percobaan</li>
            </ul>
            <br/>
            <br/>
            Contoh Sederhana
            <br/>
            “Percobaan menanam kacang hijau dilakukan untuk mengetahui pengaruh air terhadap pertumbuhan tanaman.”
          <br/>
          <br/>
          Pengertian Contoh:
          <br/>
            Kalimat tersebut menjelaskan tujuan sebuah percobaan.
            <br/>
            <br/>

            <strong>Ciri-ciri Teks Laporan Percobaan</strong>
            <br/>
             Teks laporan percobaan memiliki beberapa ciri khusus.
             <br/>
              1. Berdasarkan Fakta
              <br/>
              Isi laporan sesuai hasil percobaan nyata.
              <br/>
              <br/>
              Contoh:
              <br/>
              “Tanaman tumbuh lebih cepat setelah disiram setiap hari.”
              <br/>
              <br/>
              Pengertian Contoh:
              <br/>
              Kalimat tersebut berdasarkan hasil pengamatan.
              <br/>
              <br/>
              2. Menggunakan Bahasa Jelas
              <br/>
              Bahasa dibuat mudah dipahami.
              <br/>
              <br/>
               3. Disusun Secara Urut
               <br/>
               Langkah percobaan dijelaskan berurutan.
               <br/>
               <br/>
                4. Bersifat Informatif
              <br/>
              Memberikan informasi dan pengetahuan.
              <br/>
              <br/>
            <strong>Struktur Teks Laporan Percobaan</strong> 
            <br/>
            Teks laporan percobaan memiliki beberapa bagian penting.
            <br/>
            <br/>
               Judul Percobaan
                <br/>
              Judul menjelaskan kegiatan yang dilakukan.
              <br/>
              <br/>
              Contoh:
              <br/>
              “Percobaan Menanam Kacang Hijau”
              <br/>
              <br/>
              Pengertian Contoh:
              <br/>
              Judul menjelaskan isi percobaan.
              <br/>
              <br/>
              Tujuan Percobaan
              <br/>
              Bagian ini menjelaskan alasan melakukan percobaan.
              <br/>
              <br/>
              Contoh:
              <br/>
              “Mengetahui pengaruh air terhadap pertumbuhan kacang hijau.”
              <br/>
              <br/>
              Pengertian Contoh:
              <br/>
              Percobaan dilakukan untuk mengetahui fungsi air bagi tanaman.
              <br/>
              <br/>
              Alat dan Bahan
              <br/>
              Menjelaskan perlengkapan yang digunakan.
              <br/>
              <br/>
              Contoh:
              <br/>
              Alat:
              <br/>
              <ul>
                <li>elas plastik</li>
                <li>Penggaris</li>
              </ul>
              <br/>
              Bahan:
              <ul>
                <li> Kapas</li>
                <li>Air</li>
                <li>Biji kacang hijau</li>
              </ul>
                <br/>
                <br/>
              Pengertian Contoh:
                <br/>
              Bagian ini membantu orang lain menyiapkan percobaan yang sama.
                <br/>
                <br/>
              Langkah-langkah Percobaan
              <br/>
              Menjelaskan urutan kegiatan percobaan.
              <br/>
              <br/>
              Contoh:
              <br/>
              1. Masukkan kapas ke dalam gelas.
              2. Letakkan biji kacang hijau di atas kapas.
              3. Siram dengan air setiap hari.
              4. Amati pertumbuhan tanaman.
              <br/>
              Pengertian Contoh:
            <br/>
              Langkah dibuat berurutan agar mudah dilakukan.
            <br/>
               Hasil Percobaan
              <br/>
              Berisi hasil pengamatan setelah percobaan dilakukan.
              <br/>
              <br/>
              Contoh:
              <br/>
              “Setelah lima hari, kacang hijau mulai tumbuh daun kecil.”
              <br/>
              <br/>
              Pengertian Contoh:
              <br/>
              Bagian ini menunjukkan hasil yang diperoleh.
              <br/>
              <br/>
              Kesimpulan
              <br/>
              Kesimpulan berisi hasil akhir percobaan.
              <br/>
              <br/>
              Contoh:
              <br/>
              “Air sangat penting untuk pertumbuhan kacang hijau.”
              <br/>
              <br/>
              Pengertian Contoh:
              <br/>
              Bagian ini menjelaskan inti hasil percobaan.
              <br/>
              <br/>
              <strong> Cara Membuat Teks Laporan Percobaan</strong>
              <br/>
               Langkah 1 — Tentukan Percobaan
              <br/>
              Pilih kegiatan yang ingin dilakukan.
              <br/>
              <br/>
              Contoh:
              <ul>
                <li>Menanam kacang hijau</li>
                <li>Membuat pelangi</li>
                <li>Mencampur warna</li>
              </ul>
              <br/>
              <br/>
              Catat Alat dan Bahan
              <br/>
              Tuliskan semua perlengkapan.
              <br/>
              <br/>
              Tulis Langkah Secara Urut
              <br/>
              Agar mudah dipahami.
              <br/>
              <br/>
              Catat Hasil Percobaan
              <br/>
              Tuliskan hasil pengamatan.
              <br/>
              <br/>
              Buat Kesimpulan
              <br/>
              Tuliskan hasil akhir percobaan.
              <br/>
              <br/>
              <strong> Perbedaan Teks Laporan Percobaan dan Teks Prosedur</strong>
              <br/>
              <table border="1">
              <tr>
                <th>Teks Laporan Percobaan</th>
                <th>Teks Prosedur  </th>
              </tr>
              <tr>
                <td>Ada hasil percobaan </td>
                <td> Fokus pada langkah </td>
              </tr>
              <tr>
                <td>Menjelaskan hasil pengamatan</td>
                <td>Menjelaskan cara melakukan</td>
              </tr>
              <tr>
                <td>Ada kesimpulan</td>
                <td>Tidak selalu ada kesimpulan</td>
              </tr>
            </table>
            <br/>
            <br/>
            Kesimpulan
            <br/>
            <ul>
              <li>Teks laporan percobaan adalah teks yang menjelaskan hasil suatu percobaan.</li>
              <li>Struktur laporan terdiri dari tujuan, alat dan bahan, langkah, hasil, dan kesimpulan.</li>
              <li>Teks laporan percobaan berdasarkan fakta dan pengamatan nyata.</li>
              <li>Langkah percobaan harus ditulis secara urut dan jelas.</li>
              <li>Kesimpulan membantu mengetahui hasil akhir percobaan.</li>
            </ul>
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