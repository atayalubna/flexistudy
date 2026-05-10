import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const BahasaIndonesiaSMK = () => {
  const { state } = useLocation();
  const { id } = useParams();

  // --- DATA KUIS (MATERI SMK) ---
  const masterQuestions = [
    {
      q: "Tujuan utama dari sebuah teks negosiasi adalah untuk mencapai...",
      options: ["Kemenangan sepihak", "Kesepakatan bersama", "Perdebatan panjang", "Kritik sosial"],
      correct: "Kesepakatan bersama"
    },
    {
      q: "Bagian surat lamaran pekerjaan yang berisi informasi kualifikasi dan keahlian pelamar disebut...",
      options: ["Orientasi", "Tesis/Pernyataan argumentasi", "Isi surat", "Salam pembuka"],
      correct: "Isi surat"
    },
    {
      q: "Teks yang berisi cerita lucu namun bertujuan untuk memberikan kritik terhadap fenomena sosial disebut...",
      options: ["Teks Eksplanasi", "Teks Prosedur", "Teks Anekdot", "Teks Narasi"],
      correct: "Teks Anekdot"
    },
    {
      q: "Dalam teks eksplanasi, bagian yang menjelaskan hubungan sebab-akibat secara logis disebut...",
      options: ["Identifikasi fenomena", "Deretan penjelas", "Interpretasi", "Tesis"],
      correct: "Deretan penjelas"
    },
    {
      q: "Laporan penelitian yang disusun secara sistematis mulai dari rumusan masalah hingga kesimpulan disebut...",
      options: ["Karya Ilmiah", "Esai", "Resensi", "Kritik"],
      correct: "Karya Ilmiah"
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
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 1000px;
          margin: auto;
          color: #333;x
        }
        .header-section {
          background: linear-gradient(135deg, #2c3e50 1%, #34495e 100%);
          color: white;
          padding: 30px;
          border-radius: 12px;
          margin-bottom: 30px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .main-title {
          font-size: 1.6rem;
          font-weight: bold;
          border-bottom: 3px solid #2377e4;
          padding-bottom: 10px;
          margin-bottom: 25px;
          color: #000000;
        }
        .grid-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .info-card {
          background: #fff;
          border: 1px solid #dcdde1;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .badge {
          background: #e74c3c;
          color: white;
          padding: 4px 12px;
          border-radius: 5px;
          font-size: 0.7rem;
          font-weight: bold;
          text-transform: uppercase;
        }
        .card-title { color: #2980b9; margin: 15px 0 10px 0; font-size: 1.1rem; }
        .card-body { font-size: 0.9rem; line-height: 1.6; color: #57606f; }
        
        .quiz-box {
          background: #fdfdfd;
          border: 2px solid #3498db;
          border-radius: 15px;
          padding: 30px;
          margin-top: 40px;
        }
        .btn-opt {
          text-align: left;
          padding: 15px;
          border: 1px solid #dcdde1;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          margin-bottom: 10px;
          width: 100%;
          font-size: 0.95rem;
          transition: 0.2s;
        }
        .btn-opt:hover { background: #ebf5fb; border-color: #3498db; }
        .restart-btn {
          background: #3498db;
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
          margin-top: 20px;
        }
      `}</style>

      {/* HEADER */}
      <div className="header-section">
        <h2 style={{ margin: 0 }}>{state?.title || "Bahasa Indonesia SMK"}</h2>
        <p style={{ margin: "10px 0 0 0", opacity: 0.8 }}>
          Topik: {state?.topic || "Komunikasi Profesional & Penulisan Akademik"} | ID: {id || "BI-SMK-2026"}
        </p>
      </div>

      <h1 className="main-title">Materi Pembelajaran Tingkat SMK</h1>

      <div className="grid-content">
        {/* 1. Komunikasi Profesional */}
        <div className="info-card">
          <span className="badge">Materi Kelas 10</span>
          <h4 className="card-title">Teks LHO</h4>
          <p className="card-body">
            <strong>Apa Itu Teks Laporan Hasil Observasi?</strong> Teks Laporan Hasil Observasi atau disingkat *LHO* adalah teks yang berisi hasil pengamatan terhadap suatu objek atau keadaan.
            <br />
            Objek yang diamati bisa berupa:
            <br />
          <ul>
          <li>Hewan</li>
          <li>Tumbuhan</li>
          <li>Tempat</li>
          <li>Benda</li>
          <li>Kegiatan</li>
          </ul>         
          Tujuan teks LHO adalah memberikan informasi yang jelas dan nyata berdasarkan hasil pengamatan.
          <br />
          Contoh Sederhana
          <br />
          “Kucing adalah hewan berkaki empat yang memiliki bulu halus dan ekor.”
          <br />
          <br />
          Pengertian Contoh:
          Kalimat tersebut menjelaskan ciri-ciri kucing berdasarkan pengamatan.
          <br />
          <br />
            <strong>Ciri-ciri Teks LHO</strong> 
            <br />
            Teks LHO memiliki beberapa ciri khusus.
           Berdasarkan Hasil Pengamatan
           <br />
           Isi teks berasal dari pengamatan nyata.
            <br />
             <br />
            Contoh:
            Pohon mangga memiliki batang keras dan daun hijau.
            <br />
            Pengertian Contoh:
            Penjelasan tersebut berasal dari hal yang benar-benar bisa dilihat.
            <br />
            <br />
            Bersifat Objektif
            <br />
            Objektif berarti sesuai fakta dan tidak berlebihan.
            <br />
            Contoh:
            Burung memiliki sayap untuk terbang.
            <br />
            Pengertian Contoh:
            Kalimat tersebut berdasarkan fakta, bukan pendapat pribadi.
            <br />
            Menggunakan Bahasa Jelas
            <br />
            Bahasa dibuat mudah dipahami pembaca.
            <br />
            Memberikan Informasi
            <br />
            Teks bertujuan menambah pengetahuan pembaca.
            <br />
            <br />
             <strong>Struktur Teks LHO</strong>
          <br />
          Teks LHO biasanya memiliki tiga bagian utama.
          <ul>
          <li>Pernyataan Umum</li>
          <li>Deskripsi Bagian</li>
          <li>Deskripsi Manfaat</li>
          </ul>         
          <br />
          Pernyataan Umum
          <br />
          Bagian ini berisi penjelasan umum tentang objek yang diamati.
          <br />
          <br />
          Deskripsi Bagian
          <br />
          Bagian ini menjelaskan ciri-ciri atau bagian objek secara lebih rinci.
          <br />
          <br />
          Deskripsi Manfaat
          <br />
          Bagian ini menjelaskan manfaat atau simpulan dari objek yang diamati.
          <br />
          <br />
          <strong>Contoh Teks LHO Lengkap</strong>
          <br/>
          <br />
          “Pohon Kelapa”
          <br />
          <br />
          Pohon kelapa adalah tumbuhan yang banyak ditemukan di daerah pantai.
Pohon ini memiliki batang tinggi dan daun panjang berwarna hijau.
Buah kelapa memiliki air dan daging buah yang dapat dikonsumsi.
Selain itu, batang dan daun kelapa juga dapat dimanfaatkan untuk berbagai keperluan.
          <br />
          <br/>
          Teks tersebut menjelaskan:
          <ul>
          <li>Pengertian Pohon Kelapa</li>
          <li>Ciri - Cirinya</li>
          <li>Manfaatnya</li>
          </ul>         
          <strong>Perbedaan Teks LHO dan Teks Deskripsi</strong>
          <br/>
          <table border="1">
  <tr>
    <th>No</th>
    <th>Teks LHO</th>
    <th>Teks Deskripsi</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Berdasarkan pengamatan</td>
    <td>Menggambarkan sesuatu  </td>
  </tr>
  <tr>
    <td>2</td>
    <td>Bersifat objektif </td>
    <td>Bisa memakai pendapat pribadi </td>
  </tr>
   <tr>
    <td>3</td>
    <td>Fokus pada informasi</td>
    <td>Fokus pada gambaran objek </td>
  </tr>
</table>
        <strong>Cara Membuat Teks LHO</strong>
        <br/>
        Tentukan Objek
        Pilih Objek Yang Ingin Diamati
        <br/>
        <br/>
        Contoh:
           <ul>
          <li>Kucingg</li>
          <li>Sekolah</li>
          <li>Pohon Mangga</li>
          </ul>   
        <br/>
         Lakukan Pengamatan
         <br />
         <br />
        Perhatikan: 
           <ul>
          <li>Bentuk</li>
          <li>Warna</li>
          <li>Fungsi</li>
          </ul>   

          Catat Informasi Penting
         <br />
         <br />
        Tulis hasil pengamatan dengan rapi.
        <br />

        Susun Menjadi Teks
         <br />
         <br />
        Buat bagian:
           <ul>
          <li>Pernyataan Umum</li>
          <li>Deskripsi Bagian</li>
          <li>Deskripsi Manfaat</li>
          </ul>
          <br />
          <strong>Contoh Membuat Teks LHO</strong>   
          <br />
          Objek:Sepeda
          <br />
          Contoh Teks:
          <br />
          Sepeda adalah alat transportasi beroda dua. Sepeda memiliki pedal, setang, dan rantai. Banyak orang menggunakan sepeda untuk olahraga dan bepergian jarak dekat.
          <br />
          Pengertian Contoh:
          <br />
          Teks tersebut menjelaskan:
          <br />
          <ul>
          <li>Pengertian Sepeda</li>
          <li>Bagian Sepeda</li>
          <li>Manfaat Sepeda</li>
          </ul>
          <br />
         <strong>Bahasa yang Digunakan dalam Teks LHO</strong> 
         <br />
         <table border="1">
  <tr>
    <th>No</th>
    <th>Teks LHO biasanya menggunakan:</th>
    <th>Contoh Kata:</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Kata Benda</td>
    <td>Buku</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Kata Kerja</td>
    <td>Memasak</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Kalmat Fakta</td>
    <td>Indonesia merdeka pada 17 Agustus 1945.</td>
  </tr>
</table>
<br/>
Contoh Kalimat:
<br />
Burung memiliki sayap untuk terbang
<br />
Pengertian Contoh:
<br />
Kalimat tersebut berisi fakta tentang burung.
<br />
<br />
<strong>Tips Membuat Teks LHO yang Baik</strong>
<br />
Gunakan Fakta
<br />
Tuliskan hal yang benar-benar diamati.
<br />
Gunakan Bahasa Jelas
<br />
Hindari kalimat yang terlalu rumit.
<br />
Susun Secara Rapi
<br />
Urutkan informasi dari umum ke khusus.
<br />
<br />
 <strong>Kesimpulan</strong>
 <br />
 <ul>
   <li>Teks LHO adalah teks yang berisi hasil pengamatan.</li>
   <li>Teks LHO bersifat objektif dan berdasarkan fakta.</li>
   <li>Struktur teks LHO terdiri dari pernyataan umum, deskripsi bagian, dan kesimpulan/manfaat.</li>
   <li>Teks LHO digunakan untuk memberikan informasi kepada pembaca.</li>
   <li>Pengamatan yang teliti membuat teks LHO lebih baik dan jelas.</li>
 </ul>
          </p>
        </div>

        {/* 2. Analisis Kritis */}
        <div className="info-card">
          <span className="badge">Materi Kelas 11</span>
          <h4 className="card-title">Teks Prosedur</h4>
          <p className="card-body">
            <strong>Apa Itu Teks Prosedur?</strong> 
            <br/>
            Teks prosedur adalah teks yang berisi langkah-langkah atau cara melakukan suatu kegiatan agar tujuan dapat tercapai dengan benar.
            <br />
            <br/>
             Teks prosedur digunakan untuk:
             <br/>
          <ul>
             <li>Memberikan petunjuk</li>
             <li>Menjelaskan cara membuat sesuatu</li>
             <li>Menjelaskan cara menggunakan sesuatu</li>
          </ul>
          <br/>
          Contoh kegiatan:
          <br/>
           <ul>
             <li>Membuat makanan</li>
             <li>Mengoperasikan alat</li>
             <li>Melakukan percobaan</li>
             <li>Membuat kerajinan</li>
          </ul>
          <br/>
          Contoh Sederhana
          <br/>
          “Cara mencuci tangan dengan benar.”
          <br/>
          <br/>
          Pengertian Contoh:
          <br/>
          Topik tersebut membutuhkan langkah-langkah yang urut, sehingga termasuk teks prosedur.
          <br/>
          <br/>
            <strong>Ciri-ciri Teks Prosedur</strong> 
          <br/>
            Teks prosedur memiliki beberapa ciri khusus,diantaranya :
          <br />
          <br/>
           1. Berisi Langkah-langkah
           <br/>
           Langkah harus dilakukan secara urut
           <br/>
            Contoh:
             <ul>
             <li>Siapkan gelas</li>
             <li>Tuang air</li>
             <li>Tambahkan gula</li>
          </ul>
          <br/>
          Pengertian Contoh:
          <br/>
          Langkah dilakukan dari awal sampai akhir secara berurutan.
          <br/>
          <br/>
          2. Menggunakan Kalimat Perintah
          <br/>
          Kalimat mengajak pembaca melakukan sesuatu.
          <br/>
          Contoh: “Campurkan gula ke dalam air.”
          <br/>
          <br/>
           Pengertian Contoh:
           <br/>
           Kalimat tersebut merupakan perintah.
           <br/>
           <br/>
           3. Menggunakan Kata Kerja Tindakan
           <br/>
           Menunjukkan aktivitas.
           <br/>
           Contoh:
             <ul>
             <li>Potong</li>
             <li>Campur</li>
             <li>Rebus</li>
          </ul>
          <br/>
          4. Bersifat Jelas dan Mudah Dipahami
          <br/>
          Agar pembaca tidak bingung.
          <br/>
          <br/>
            <strong>Struktur Teks Prosedur</strong>
            <br/>
            Teks prosedur memiliki beberapa bagian penting.
            <br/>
            <table border="1">
           <tr>
            <th>No</th>
            <th>Struktur Teks Prosedur</th>
            <th>Pengertian Struktur </th>
            <th>Contoh </th>
           </tr>
           <tr>
             <td>1</td>
             <td>tujuan</td>
             <td>Bagian yang menjelaskan hasil atau tujuan kegiatan.</td>
             <td>“Cara membuat teh manis.”</td>
            </tr>
            <tr>
             <td>2</td>
             <td>Alat dan Bahan</td>
             <td>Bagian yang menjelaskan perlengkapan yang diperlukan.</td>
             <td>Alat:  Gelas,Sendok
              <br/>
              <br/>
              bahan :  Teh,Gula,Air panas</td>
             </tr>
          </table>
          <br/>
            <strong>Langkah-langkah</strong> 
            <br />
            Bagian inti yang berisi urutan kegiatan.
            <br />
            Contoh:
            <br />
            <ul>
             <li>Masukkan teh ke gelas.</li>
             <li>Tuang air panas.</li>
             <li>Tambahkan gula.</li>
          </ul>
          <br />
          Pengertian Contoh:
          <br />
          Langkah harus dilakukan secara urut agar hasilnya benar.
          <br />
          <strong> Contoh Teks Prosedur Lengkap</strong>
          <br />
          Cara Membuat Mi Insta
          <br />
          Alat dan Bahan:
          <br />
          <ul>
             <li>Panci</li>
             <li>Air.</li>
             <li>Mie instan</li>
          </ul>
          <br />
           Langkah-langkah:
          <ul>
             <li>Panaskan air hingga mendidih.</li>
             <li>Masukkan mi ke dalam panci.</li>
             <li>Tunggu selama tiga menit.</li>
             <li>Masukkan bumbu ke mangkuk.</li>
             <li>Tuang mi dan kuah ke mangkuk.</li>
             <li>Aduk hingga rata.</li>
          </ul>
          <br />
          Pengertian Teks:
          <br />
          Teks tersebut menunjukkan:
          <br/>
          <ul>
             <li>Tujuan kegiatan</li>
             <li>Alat dan bahan</li>
             <li>Langkah-langkah yang urut</li>
          </ul>
          <br/>
          <strong>Jenis-jenis Teks Prosedur</strong>
          <br />
          Prosedur Sederhana
          <br />
          Langkahnya sedikit dan mudah.
          <br />
          Contoh:
          <br />
          <ul>
            <li>Cara menyalakan lampu.</li>
          </ul>
          <br />
          Prosedur Kompleks:
          <br />
          Langkahnya lebih banyak dan rinci.
          <br />
          Contoh:
          <ul>
            <li>Cara membuat kue.</li>
          </ul>
          <br/>
          Prosedur Protokol
          <br />
          Langkah dapat dilakukan tidak terlalu kaku.
          <br />
          Contoh:
          <ul>
            <li>Cara menggunakan aplikasi.</li>
            </ul>
            <br />
            <strong> Bahasa dalam Teks Prosedur</strong>
            <br />
            Teks prosedur menggunakan bahasa tertentu.
            <br />
            Kalimat Perintah
            <br />
             Contoh:
             <br />
             <ul>
             <li>Siapkan alat</li>
             <li>Campurkan bahan</li>
             <li>Panaskan air</li>
          </ul>
          <br />
          Contoh Kalimat:
          <br />
          Potong sayur menjadi kecil.
          <br />
          Pengertian Contoh:
          <br />
          Kalimat tersebut memberi instruksi.
          <br />
           Kata Hubung Urutan
           <br />
           Contoh:
           <br />
           <ul>
             <li>Pertama</li>
             <li>Kemudian</li>
             <li>Setelah itu</li>
          </ul>
          <br />
           Contoh Kalimat:
           <br />
           Setelah itu, tambahkan gula.
           <br />
           Pengertian Contoh:
           <br />
           Kata tersebut menunjukkan urutan langkah.
           <br />
            Kata Kerja Tindakan
            <br />
             Contoh:
             <br />
             <ul>
             <li>Rebuh</li>
             <li>Aduk</li>
             <li>Tuang</li>
          </ul>
          <br />
           Cara Membuat Teks Prosedur
           <br />
           Langkah 1 :Tentukan Tujuan
           <br />
          Pilih kegiatan yang ingin dijelaskan.
          <br />
          Contoh:
          <br />
          <ul>
             <li>Membuat minuman</li>
             <li>Menggunakan alat</li>
             <li>Membuat kerajinan</li>
          </ul>
          <br />
          Langkah 2 :Siapkan Alat dan Bahan
          <br />
          Tuliskan semua kebutuhan.
          <br />
           Langkah 3 — Susun Langkah Secara Urut
           <br />
           Mulai dari awal hingga akhir.
           <br />
           Langkah 4 — Gunakan Bahasa Jelas
           <br />
           Agar mudah dipahami pembaca.
           <br />
           <strong>Contoh Membuat Teks Prosedur</strong>
           <br />
           Tema:
           <br />
           Cara Menanam Bunga
           <br />
           Alat dan Bahan:
          <br />
          <ul>
             <li>Pot</li>
             <li>Tanah</li>
             <li>Bibit bunga</li>
             <li>Air</li>
          </ul>
          <br />
          Langkah-langkah:
          <br />
          <ul>
             <li>Masukkan tanah ke dalam pot.</li>
             <li>Tanam bibit bunga.</li>
             <li>Siram dengan air secukupnya.</li>
             <li>Letakkan pot di tempat yang terkena sinar matahari.</li>
          </ul>
          <br />
          Pengertian Contoh:
          <br />
          Langkah-langkah tersebut membantu pembaca menanam bunga dengan benar.
          <br />
          <strong>Tips Membuat Teks Prosedur Menarik</strong>
          <br />
           <table border="1">
           <tr>
            <th>No</th>
            <th>Tips</th>
            <th>Pengertian Singkat</th>
           </tr>
           <tr>
             <td>1</td>
             <td>Gunakan Langkah yang Jelas</td>
             <td>Agar mudah diikuti.</td>
            </tr>
            <tr>
             <td>2</td>
             <td>Susun Secara Berurutan</td>
             <td>Jangan melompat-lompat.</td>
             </tr>
             <tr>
             <td>3</td>
             <td>Gunakan Bahasa Sederhana</td>
             <td>Agar pembaca cepat memahami</td>
             </tr>
              <tr>
             <td>4</td>
             <td> Tambahkan Gambar Jika Perlu</td>
             <td>Agar lebih menarik</td>
             </tr>
          </table>
          <br/>
          <br/>
          <strong>Perbedaan Teks Prosedur dan Teks Eksplanasi</strong>
          <br/>
          <table border="1">
           <tr>
            <th>No</th>
            <th>Teks Prosedur</th>
            <th>Teks Eksplanasi</th>
           </tr>
           <tr>
             <td>1</td>
             <td>Menjelaskan cara melakukan sesuatu</td>
             <td>Menjelaskan proses terjadinya sesuatu</td>
            </tr>
            <tr>
             <td>2</td>
             <td>Berisi langkah-langkah  </td>
             <td>Berisi sebab dan akibat   </td>
             </tr>
             <tr>
             <td>3</td>
             <td>Menggunakan kalimat perintah  </td>
             <td>Bersifat informatif</td>
             </tr>
          </table>
          <br/>
           Kesimpulan
           <br/>
            <ul>
             <li>Teks prosedur adalah teks yang berisi langkah-langkah melakukan suatu kegiatan.</li>
             <li>Struktur teks prosedur terdiri dari tujuan, alat dan bahan, serta langkah-langkah.</li>
             <li>Teks prosedur menggunakan kalimat perintah dan kata kerja tindakan.</li>
             <li>Langkah harus disusun secara urut dan jelas.</li>
             <li>Teks prosedur membantu pembaca melakukan sesuatu dengan benar.</li>
          </ul>
          </p>
        </div>

        {/* 3. Akademik & Sastra */}
        <div className="info-card">
          <span className="badge">Materi Kelas 12</span>
          <h4 className="card-title">Teks Rekon (Biografi/Sejarah)</h4>
          <p className="card-body">
            <strong>Apa Itu Teks Rekon?</strong> 
            <br/>
             Teks rekon adalah teks yang menceritakan kembali suatu peristiwa atau pengalaman yang sudah terjadi secara urut sesuai waktu kejadian.
            <br />
            <br/>
            Teks rekon dapat berupa:
            <ul>
              <li>Biografi tokoh</li>
              <li>Peristiwa sejarah</li>
              <li>Pengalaman pribadi</li>
              <li>Kejadian penting</li>
            </ul>
            <br/>
            Tujuan teks rekon:
             <ul>
              <li>Memberikan informasi tentang suatu peristiwa</li>
              <li>Menceritakan kembali kejadian masa lalu</li>
              <li>Menambah pengetahuan pembaca</li>
            </ul>
            <br/>
            Contoh Sederhana:
            <br/>
            “Indonesia memproklamasikan kemerdekaan pada tanggal 17 Agustus 1945.”
            <br/>
            <br/>
            Pengertian Contoh:
            <br/>
            Kalimat tersebut menceritakan peristiwa sejarah yang benar-benar terjadi.
            <br/>
            <br/>
            <strong>Ciri-ciri Teks Rekon</strong> 
            <br/>
            Teks rekon memiliki beberapa ciri khusus.
            <table border="1">
              <tr>
                <th>No</th>
                <th>Ciri - Ciri</th>
                <th>Pengertian Singkat</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Menceritakan Peristiwa Masa Lalu</td>
                <td>Kejadian sudah pernah terjadi</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Disusun Secara Urut</td>
                <td>Cerita mengikuti urutan waktu.</td>
              </tr>
               <tr>
                <td>3</td>
                <td>Berdasarkan Fakta</td>
                <td>Isi cerita nyata dan benar terjadi.</td>
              </tr>
               <tr>
                <td>4</td>
                <td>Menggunakan Keterangan Waktu</td>
                <td>Ada penjelasan kapan peristiwa terjadi.</td>
              </tr>
            </table>
            <br/>
            <strong>Jenis-jenis Teks Rekon</strong>
            <br/>
            <table border="1">
            <tr>
              <th>Jenis Teks Rekon</th>
              <th>Pengertian Singkat</th>
              <th>Contoh</th>
            </tr>
            <tr>
              <td> Rekon Pribadi</td>
              <td>Menceritakan pengalaman pribadi.</td>
              <td>Pengalaman mengikuti lomba.</td>
            </tr>
            <tr>
              <td>Rekon Biografi</td>
              <td>Menceritakan perjalanan hidup tokoh.</td>
              <td>Biografi B.J. Habibie.</td>
            </tr>
             <tr>
              <td>Rekon Sejarah</td>
              <td>Menceritakan peristiwa sejarah.</td>
              <td>Peristiwa Proklamasi Kemerdekaan.</td>
            </tr>
          </table>
            <br/>
            <strong> Struktur Teks Rekon</strong>
            <br/>
            Teks rekon memiliki beberapa bagian penting.
            <br/>
            Orientasi :
          <br/>  
           Bagian pengenalan peristiwa atau tokoh.
            <br/>
            <br/>
            Contoh:
            <br/>
            “R.A. Kartini lahir di Jepara pada tahun 1879.”
            <br/>
            <br/>
            Rangkaian Peristiwa:
            <br/>
            Bagian inti yang menjelaskan kejadian secara urut.
            <br/>
            <br/>
            Contoh:
            <br/>
            “Kartini memperjuangkan pendidikan perempuan Indonesia.”
            <br/>
            <br/>
             Reorientasi
            <br/>
            Bagian penutup atau kesimpulan.
            <br/>
            <br/>
          Contoh:
          <br/>
          “Perjuangan Kartini menjadi inspirasi bagi perempuan Indonesia.”
          <br/>
          <strong>Contoh Teks Rekon Biografi</strong>
          <br/>
          “Biografi Ki Hajar Dewantara”
          <br/>
          <br/>
          Ki Hajar Dewantara lahir di Yogyakarta pada tanggal 2 Mei 1889. Ia dikenal sebagai tokoh pendidikan Indonesia.
          <br/>
          <br/>
          Beliau mendirikan sekolah Taman Siswa untuk membantu masyarakat mendapatkan pendidikan. Ki Hajar Dewantara terus memperjuangkan pendidikan hingga akhir hayatnya.
          <br/>
          <br/>
          Jasa beliau sangat besar bagi dunia pendidikan Indonesia. Karena itu, tanggal kelahirannya diperingati sebagai Hari Pendidikan Nasional.
          <br/>
          <br/>
          Pengertian Teks:
          <br/>
          Teks tersebut menjelaskan:
          <br/>
          <ul>
           <li>Kehidupan tokoh</li>
           <li>Perjuangan tokoh</li>
           <li>Jasa tokoh</li>
           </ul>
           <br/>
           Contoh Teks Rekon Sejarah
            <br/>
            “Proklamasi Kemerdekaan Indonesia”
            <br/>
            <br/>
            Pada tanggal 17 Agustus 1945, Indonesia memproklamasikan kemerdekaannya. Proklamasi dibacakan oleh Ir. Soekarno didampingi Drs. Mohammad Hatta di Jakarta.
            <br/>
            <br/>
            Peristiwa tersebut menjadi awal kemerdekaan Indonesia setelah lama dijajah. Hingga sekarang, tanggal 17 Agustus diperingati sebagai Hari Kemerdekaan Indonesia.
            <br/>
            <br/>
            Pengertian Teks:
            <br/>
            Teks tersebut menjelaskan:
            <br/>
            <ul>
            <li>Waktu kejadian</li>
            <li>Tokoh penting</li>
            <li>Makna peristiwa sejarah</li>
            </ul>
            <br/>
            <strong>Bahasa dalam Teks Rekon</strong>
            <br/>
            Teks rekon menggunakan bahasa tertentu.
            <br/>
            <br/>
            1. Kata Kerja
            <br/>
            Contoh:
            <br/>
            <ul>
              <li>Memimpin</li>
              <li>Mendirikan</li>
              <li>Membaca</li>
            </ul>
            <br/>
             2. Kata Keterangan Waktu
             <br/>
             Contoh:
              <ul>
              <li>Pada tahun…</li>
              <li>Kemudian…</li>
              <li>Setelah itu…</li>
            </ul>
            <br/>
            3. Kalimat Fakta
            <br/>
            Contoh:
            <br/>
            “Ki Hajar Dewantara lahir di Yogyakarta.”
            <br/>
            <br/>
            <strong>Cara Membuat Teks Rekon</strong>
            <br/>
            <ul>
              <li>Pilih Peristiwa atau Tokoh</li>
              <li>Kumpulkan Informasi</li>
              <li>Susun Secara Urut</li>
              <li>Gunakan Bahasa Jelas</li>
            </ul>
            <br/>
              <strong>Perbedaan Teks Rekon dan Narasi</strong>
            <br/>
            <br/>
            <table border="1">
            <tr>
              <th>No</th>
              <th>Rekon</th>
              <th>Narasi </th>
            </tr>
            <tr>
              <td>1</td>
              <td>Berdasarkan fakta</td>
              <td>Bisa berupa khayalan</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Menceritakan kejadian nyata</td>
              <td>Bisa fiksi</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Fokus pada urutan kejadian</td>
              <td>Fokus pada cerita</td>
            </tr>
          </table>
          <strong>Tips Membuat Teks Rekon Menarik</strong>
          <br/>
          1. Gunakan Data yang Jelas
          <br/>
          2. Susun Secara Urut
          <br/>
          3. Gunakan Bahasa Mudah Dipahami
          <br/>
          4. Tambahkan Nilai Positif
          <br/>
          <br/>
          <strong>Kesimpulan</strong>
          <ul>
              <li>Teks rekon adalah teks yang menceritakan kembali peristiwa masa lalu.</li>
              <li>Rekon dapat berupa biografi, sejarah, atau pengalaman pribadi.</li>
              <li>Struktur teks rekon terdiri dari orientasi, rangkaian peristiwa, dan reorientasi.</li>
              <li>Teks rekon menggunakan fakta dan urutan waktu.</li>
              <li>Membaca teks rekon membantu memahami sejarah dan pengalaman hidup.</li>
          </ul>
          </p>
        </div>
      </div>

      {/* QUIZ SECTION */}
      <div className="quiz-box">
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <div style={{ background: "#3498db", color: "white", width: "30px", height: "30px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" }}>?</div>
          <h3 style={{ margin: 0 }}>Uji Kompetensi Bahasa</h3>
        </div>

        {showScore ? (
          <div style={{ textAlign: "center" }}>
            <h2>Selesai! 🎉</h2>
            <p style={{ fontSize: "1.4rem" }}>Skor: <strong>{score * 20} / 100</strong></p>
            <p>Berhasil menjawab {score} dari {questions.length} soal.</p>
            <button className="restart-btn" onClick={shuffleQuiz}>Ulangi & Acak Soal</button>
          </div>
        ) : (
          questions.length > 0 && (
            <div className="q-area">
              <span style={{ fontSize: "0.85rem", color: "#7f8c8d" }}>Pertanyaan {currentQuestion + 1} dari {questions.length}</span>
              <h4 style={{ margin: "15px 0 25px 0", lineHeight: "1.4" }}>{questions[currentQuestion].q}</h4>
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

export default BahasaIndonesiaSMK;

