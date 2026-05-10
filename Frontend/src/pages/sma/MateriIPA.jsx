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
          background: linear-gradient(135deg, #445e25 1%, #bbdefb 100%);
          padding: 20px 30px;
          border-radius: 12px;
          border-left: 8px solid #ffffff;
          margin-bottom: 30px;
        }

        .level-title {
          font-size: 1.4rem;
          color: #ffffff;
          font-weight: 800;
          margin-bottom: 25px;
          border-bottom: 2px solid #445e25;
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
        {/* Materi Kelas 10 */}
        <div className="subject-card">
          <span className="subject-badge biologi-bg">Mteri Kelas 10</span>
          <h4>Kehidupan & Genetika</h4>
          <ul>
            <li><strong>Pengukuran dalam Kerja Ilmiah</strong>
            <br />
            1. Besaran & Satuan
            <br />
            Besaran pokok: panjang (meter), massa (kg), waktu (detik), suhu (kelvin), arus listrik (ampere).
            Pengukuran penting dalam sains karena tanpa angka yang jelas, hasil percobaan bisa salah dan sulit dibandingkan.</li>
            Besaran turunan: luas (m²), volume (m³), kecepatan (m/s)
            <br />
            Contoh:
            Mengukur panjang meja = 120 cm
            <br />
            Diubah ke meter:
            120 cm ÷ 100 = 1,2 m
            <br />
            Cara memahami:
            Besaran pokok itu “bahan dasar”, sedangkan besaran turunan itu “hasil olahan”.
            <br />
            2. Alat Ukur
             <table border="1">
           <tr>
            <th>No</th>
            <th>Alat Ukur</th>
            <th>Satuan</th>
           </tr>
           <tr>
             <td>1</td>
             <td>Penggaris</td>
             <td>Panjang</td>
            </tr>
            <tr>
             <td>2</td>
             <td>Jangka Sorong  </td>
             <td>Diameter Benda Kecil   </td>
             </tr>
             <tr>
             <td>3</td>
             <td>Mikrometer Sekrup  </td>
             <td>Ketebalan Tipis</td>
             </tr>
             <tr>
             <td>4</td>
             <td>Termometer  </td>
             <td>Suhu</td>
             </tr>
          </table>
          <br />
          Contoh:
          <br />
          Mengukur diameter koin pakai jangka sorong: terbaca 2,5 cm.
          <br />
          Cara memahami:
          Semakin kecil benda → alat ukur makin presisi.
          <br />
          3. Angka Penting
          <br />
          Dipakai saat pembulatan supaya hasil hitungan tetap benar.
          <br />
          Contoh:
          <br />
          0,00450 → memiliki 3 angka penting (4, 5, 0 terakhir)
          <br />
          Cara memahami:
          Angka nol di depan bukan angka penting, tapi nol di belakang angka non-nol itu penting.
            <br/>
            <li><strong> Virus dan Peranannya</strong>
            <br />
             Virus berbeda dari makhluk hidup biasa karena hanya bisa berkembang biak di dalam sel makhluk hidup..</li>
            <br />
            1. Struktur Virus
            <br />
            Terdiri dari:
            <br />
            <table border="1">
           <tr>
            <th>No</th>
            <th>Daftar Virus</th>
            <th>Pengertian</th>
           </tr>
           <tr>
             <td>1</td>
             <td>Kapsid</td>
             <td>Selubung Protein</td>
            </tr>
            <tr>
             <td>2</td>
             <td>Materi Genetik  </td>
             <td>DNA atau RNA</td>
             </tr>
          </table>
          <br />
          Contoh:
          <br />
          Virus influenza memiliki selubung luar dan RNA di dalamnya.
          <br />
          Cara memahami:
          <br />
          Virus itu seperti “paket kecil” berisi kode genetik.
          2. Reproduksi Virus
          <br />
          Virus tidak bisa membelah sendiri.
          <br />
          Langkah umumnya:
          <br />
          1. Menempel pada sel
          <br />
        2. Memasukkan materi genetik
          <br />
        3. Mengambil alih mesin sel
          <br />
        4. Membentuk virus baru
          <br />
        5. Pecah keluar dari sel
          <br />
          Cara memahami:
          <br />
          Bayangkan virus itu “menumpang” di dalam sel dan memakai semua alatnya untuk membuat salinan dirinya.
          <br />
          3. Peranan Virus
          <br />
          A. Peran negatif
          <br />
          Menyebabkan penyakit pada tumbuhan, hewan, manusia.
          <br />
          B. Peran positif
          <br />
          Riset vaksin
          <br />
          Terapi gen
          <br />
          Pengendali hama biologis
          <br />
          Contoh positif:
          <br />
          Virus tertentu dipakai untuk membunuh bakteri merugikan di industri makanan.
            <li><strong> Kimia Hijau</strong> Kimia hijau adalah cara bekerja di laboratorium atau industri dengan tetap menjaga bumi.</li>
          
          <br />
          12 Prinsip Kimia Hijau (disederhanakan)
          <br />
          1. Mengurangi limbah
          <br />
          2. Memakai bahan yang aman
          <br />
          3. Hemat energi
          <br />
          4. Menggunakan bahan yang dapat diperbarui
          <br />
          5. Mengurangi penggunaan bahan berbahaya
          <br />
          Contoh
          <br />
          Menggunakan kantong dari tepung singkong (bioplastik) → lebih ramah lingkungan.
          <br />
          Cara memahami:
          <br />
          Kalau kimia itu “dapur”, kimia hijau artinya kita memasak tanpa membuang-buang bahan dan tidak mencemari lingkungan.
          <br />
          <li><strong>Struktur Atom & Nanoteknologi</strong></li>
          <br />
          1. Struktur Atom
          <br />
          Atom tersusun atas:
          <br />
          A. Proton (+)
          <br />
          C. Neutron (0)
          <br />
          D. Elektron (-)
          <br />
          Elektron berada pada kulit-kulit (energi level).
          <br />
          Contoh konfigurasi elektron:
          <br />
          Atom Natrium (Na) → nomor atom 11
          <br />
          Konfigurasi: 2-8-1
          <br />
          Cara memahami:
          <br />
          Elektron itu seperti “lantai rumah”.
          <br />
          Lantai pertama penuh dulu (maks 2), lalu lantai kedua (maks 8), dan seterusnya.
          <br />
          2. Tabel Periodik
          <br />
          Urutan unsur berdasarkan:
          <br />
          Nomor atom
           <br />
          Kemiripan sifat
          <br />
          Contoh:
          <br />
          Golongan 1 → logam alkali (natrium, kalium) yang reaktif.
          <br />  
          Cara memahami:
          <br />
          Tabel periodik itu seperti “peta besar” untuk memahami sifat semua unsur.
          <br />
          3. Nanoteknologi
          <br />
          Teknologi yang bekerja pada skala sangat kecil (1 nm = 1 per miliar meter).
          <br />
          Keunggulan nanomaterial:
          <br />
          A. Lebih kuat
          <br />
          B. Lebih ringan
          <br />
          C. Lebih reaktif
          <br />
          D. Lebih efisien dalam penghantaran panas/obat
          <br />
          Contoh:
          <br />
          Sunscreen modern memakai nano ZnO supaya tidak tampak putih di kulit.
          <br />
          Cara memahami:
          <br />
          Benda yang diperkecil sampai skala nano sering punya “kekuatan super”.
          <br />
          <li><strong> Hukum Dasar Kimia</strong>
          Ini hal dasar untuk menghitung reaksi kimia (stoikiometri).</li>
          <br />
          1. Hukum Kekekalan Massa
          <br />
          Massa sebelum reaksi = massa sesudah reaksi.
          <br />
          Contoh:
          <br />          
          2 g h idrogen + 16 g oksigen → 18 g air
          <br />
          (2 + 16 = 18)
          <br />
          Cara memahami:
          <br />
          Reaksi kimia itu “mengatur ulang” atom, bukan membuat atau menghilangkan atom.
          <br />
          2. Hukum Perbandingan Tetap
            <br />
          Senyawa selalu punya perbandingan massa unsur yang tetap.
          <br />
          Contoh:
          <br />
          Air → H₂O
          <br />
          Perbandingan hidrogen : oksigen selalu 1 : 8
          <br />
          3. Stoikiometri
          <br />
          Menghitung jumlah zat dalam reaksi.
          <br />
          Contoh sederhana:
          <br />
          Persamaan:
          <br />
          2H₂ + O₂ → 2H₂O
          <br />
          Artinya: 2 molekul hidrogen + 1 molekul oksigen menghasilkan 2 molekul air.
          <br />
          Cara memahami:
          <br />
          Stoikiometri itu seperti resep kue.
          <br />
          Kalau tepung kurang → kuenya gagal.
          <br />
          Kalau salah reaksi → produknya tidak sesuai.
          <br />
</ul>

        </div>

        {/* Materi Kelas 11 IPA */}
        <div className="subject-card">
          <span className="subject-badge fisika-bg">Materi Kelas 11</span>
          <h4>Mekanika & Modern</h4>
          <ul>
            <li><strong>Strukturndan Fungsi Sel</strong></li>
            <br />
            1. Apa itu Sel?
            <br />
            Sel = unit terkecil kehidupan yang menyusun semua makhluk hidup.
            <br />
            <table border="1">
  <tr>
    <th>No</th>
    <th>Organel Sel</th>
    <th>Fungsi</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Membran Sel</td>
    <td>Keluar dan Masuknya Zat</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Sitoplasma</td>
    <td>Tempat Organel Berbeda</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Inti Sel (Nukleus)</td>
    <td>Pusat pengatur aktivitas penyimpan DNA</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Mitokondria</td>
    <td>Penghasil Energi (ATP)</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Ribosom</td>
    <td>Mrmbuat Protein</td>
  </tr>
  <tr>
    <td>6</td>
    <td>RE Kasar</td>
    <td>Produksi Protein</td>
  </tr>
  <tr>
    <td>7</td>
    <td>RE Halus</td>
    <td>Membentuk Lemak atau Hormon</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Aparatus Golgi</td>
    <td>mengemas & mengirim zat</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Lisosom</td>
    <td>pencerna zat rusak</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Kloroplas (tumbuhan) </td>
    <td> fotosintesis</td>
  </tr>
  <tr>
    <td>11</td>
    <td>Vakuola</td>
    <td>penyimpanan air/cadangan makanan</td>
  </tr>
</table>
<br />
          3. Perbedaan Sel Hewan & Tumbuhan
          <br />
          Sel Hewan	Sel Tumbuhan
          <br />
          <br />
          A. Tidak ada dinding sel	Ada dinding sel
          <br />
          B. Tidak ada kloroplas	Ada kloroplas
          <br />
          C. Vakuola kecil	Vakuola besar
          <br />
          D. Bentuk fleksibel	Bentuk kaku
          <br />
            <li><strong>Jaringan Hewan dan Tumbuhan</strong></li>
            <br />
            1. Jaringan Pada Hewan
              <br />
            <table border="1">
  <tr>
    <th>No</th>
    <th>Nama Jaringan</th>
    <th>Fungsi</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Epitel</td>
    <td>Pelindung dan Pelapis</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Otot</td>
    <td>gerak (lurik, halus, jantung)</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Syaraf</td>
    <td>penghantar impuls</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Ikat</td>
    <td>penghubung/penyokong (darah, tulang, lemak)</td>
  </tr>
</table>
            <br />
            2. Jaringan Pada Tumbuhan
            <br />
            <table border="1">
  <tr>
    <th>No</th>
    <th>Nama Jaringan</th>
    <th>Fungsi</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Meristem</td>
    <td>pertumbuhan (akar & batang)</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Epidermis</td>
    <td>pelindung luar</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Parenkim</td>
    <td>fotosintesis, penyimpan cadangan</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Xilem</td>
    <td>Angkut Air</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Floem</td>
    <td>angkut hasil fotosintesis</td>
  </tr>
</table>
          <br />
            <li><strong>SIstem Organ Manusia</strong></li>
            Fokus Pembahasan:
<br />
A. Pernapasan
<br />
B. Pencernaan
<br />
C. Peredaran darah
<br />
D. Ekskresi (ginjal)
<br />
E. Koordinasi (saraf & hormon)
<br />
F. Reproduksi
<br />
Contoh: Sistem Pencernaan
<br />
Mulut → kerongkongan → lambung → usus halus → usus besar → anus
<br />
* Pencernaan mekanik: mengunyah
<br />
* Pencernaan kimia: enzim (amilase, pepsin, tripsin, lipase)
<br />
          <li><strong>Metabolisme</strong></li>
          <br />
          1. Katabolisme
          <br />
          Pemecahan senyawa → menghasilkan energi
          <br />
          Contoh: respirasi sel (glikolisis, siklus Krebs, rantai elektron)
          <br />
          2. Anabolisme
          <br />
          Pembentukan senyawa → butuh energi
          <br />
          Contoh: fotosintesis
          <br />

          <li><strong>FOTOSINTESIS & RESPIRASI</strong></li>
          <br />
Fotosintesis
<br />
Terjadi pada kloroplas
<br />
Reaksi: CO₂ + H₂O + cahaya → glukosa + O₂
<br />
2 tahap:
<br />
A. Reaksi terang
<br />
B. Reaksi gelap (Siklus Calvin)
<br />
Respirasi
<br />
Menghasilkan energi (ATP) di mitokondria
<br />
Glukosa + O₂ → energi + CO₂ + H₂O
<br />
          
          <li><strong>GENETIKA DASAR</strong></li>
          <br />
          Istilah Penting:
          <br />
A. Gen = pembawa sifat
          <br />
B. DNA = materi genetik
          <br />
C. Kromosom = kumpulan gen
          <br />
D. Alel = variasi gen
          <br />
E. Genotipe = “kode gen”
          <br />
F. Fenotipe = bentuk luarnya (yang terlihat)
          <br />
          Hukum Mendel:
          <br />
          Sifat dominan menutupi resesif
          <br />
          Penyilangan menghasilkan perbandingan khas (3:1, 1:2:1)
          <br />
Contoh simpel:
A = dominan, a = resesif
<br />
AA = dominan
<br />
Aa = dominan
<br />
aa = resesif
<br />
          <li><strong>JARINGAN & SISTEM TRANSPORTASI PADA TUMBUHAN</strong></li>
          <br />
          A. Xilem
          <br />
* Mengalirkan air dari akar → daun
          <br />
* Satu arah
          <br />
          B. Floem
          <br />
* Mengalirkan hasil fotosintesis
          <br />
* Dua arah (atas & bawah)
          <br />
          1. Mekanisme transport
            <br />
          2. Transpirasi
            <br />
          3.Tekanan akar
            <br />
          4. Gaya kohesi-adhesi
            <br />

            <li><strong> EKOLOGI DASAR</strong></li>
            <br />
             1. Komponen ekosistem:
              <br />  
            A. Biotik: makhluk hidup
            <br />
            B. Abiotik: cahaya, suhu, air, tanah
            <br />
            2. Rantai Makanan
            <br />
            A. Produsen → Konsumen 1 → Konsumen 2 → Konsumen 3
            <br />
            B. Hubungan antar makhluk
            <br />
            C. Mutualisme → saling menguntungkan
            <br />
            D. Parasitisme → satu untung, satu rugi
            <br />
            E. Komensalisme → satu untung, satu netral

          </ul>
        </div>

        {/* Materi Kelas 12 IPA */}
        <div className="subject-card">
          <span className="subject-badge kimia-bg">Materi Kelas 12</span>
          <h4>Struktur & Reaksi</h4>
          <ul>
            <li><strong>Pertumbuhan & Perkembangan:</strong></li>
            <br />
            1. Pengertian
            <br />
Pertumbuhan: bertambah jumlah & ukuran sel → sifatnya kuantitatif (bisa diukur).
            <br />
Contoh: tinggi tanaman bertambah.
            <br />
Perkembangan: proses menuju kedewasaan → sifatnya kualitatif (tidak diukur).
            <br />
Contoh: bunga mulai muncu
            <br />
2. Faktor yang Mempengaruhi
            <br />
Internal: gen, hormon (auksin, giberelin, sitokinin, etilen).
            <br />
Eksternal: cahaya, suhu, air, nutrisi.
            <br />
3. Kurva Pertumbuhan
<br />
Tahapan:
<br />
1. Fase lag (lambat)
<br />
2. Fase log (cepat)
<br />
3. Fase konstan
<br />
4. Fase stasioner
<br />
<li> <strong>  Pewarisan Sifat (Genetika Lanjut)</strong></li>
<br />
1. Istilah Penting
<br />
Gen: pembawa sifat.
<br />
Alel: bentuk alternatif gen (A & a).
<br />
Genotipe: susunan gen (AA, Aa).
<br />
Fenotipe: tampilan fisik.
<br />
2. Pola-Pola Pewarisan
<br />
Dominan – Resesif (Mendel)
<br />
Intermediet: fenotipe campuran (merah × putih → merah muda).
<br />
Kodominan: dua alel muncul bersamaan (golongan darah AB).
<br />
Pautan Seks: terletak pada kromosom X (buta warna).
<br />
3. Peta Genetik
<br />
Menentukan jarak gen berdasarkan frekuensi pindah silang.
<br />
<li> <strong>  Evolusi </strong></li>
<br />
 1. Teori Evolusi
<br />
Darwin: seleksi alam → individu yang cocok akan bertahan.
<br />
Lamarck: sifat diperoleh bisa diwariskan (salah, tapi historis penting).
<br />
2. Bukti Evolusi
<br />
Fosil
<br />
Homologi (struktur serupa): sayap kelelawar & tangan manusia
<br />
Analogi (fungsi sama): sayap burung & sayap kupu-kupu
<br />
DNA & biokimia
<br />
3. Mekanisme Evolusi
<br />
Mutasi
<br />
Seleksi alam
<br />
Aliran gen
<br />
Apungan genetik (genetic drift)
<br />
<li> <strong> Bioteknologi</strong></li>
<br />
1. Pengertian
<br />
Pemanfaatan makhluk hidup untuk membuat produk.
<br />
2. Bioteknologi Konvensional
<br />
Fermentasi: tape, tempe, yogurt, roti.
<br />
3. Bioteknologi Modern
<br />
Rekayasa genetika
<br />
Kultur jaringan
<br />
Kloning
<br />
Produksi insulin rekombinan
<br />
4. Dampak Bioteknologi
<br />
Positif: produksi cepat, hasil banyak.
<br />
Negatif: limbah, isu etika, risiko GMO.
<br />
<li> <strong>Sistem Reproduksi Manusia</strong></li>
<br />
1. Reproduksi Laki-Laki
<br />
Testis (pembentuk sperma), epididimis, vas deferens, uretra, penis.
<br />
Hormon: testosteron.
<br />
2. Reproduksi Perempuan
<br />
Ovarium (sel telur), oviduk, rahim, vagina.
<br />
Hormon: estrogen & progesteron.
<br />
Siklik: menstruasi → ovulasi → pembuahan.
<br />
3. Kehamilan (singkat)
<br />
Fertilisasi → zigot → embrio → janin.
<br />
Nutrisi dari plasenta.
<br />
<li><strong>Sistem Koordinasi & Indra</strong></li>
<br />
1. Sistem Saraf
<br />
Pusat: otak & sumsum tulang belakang
<br />
Tepi: saraf sensorik, motorik
<br />
2. Sistem Hormon (Endokrin)
<br />
Kelenjar tiroid, pankreas, adrenal, hipofisis.
<br />
3. Indra
<br />
Mata (penglihatan)
<br />
Telinga (pendengaran & keseimbangan)
<br />
Lidah, hidung, kulit
<br />
<li><strong>Mutasi</strong></li>
<br />
Mutasi gen: perubahan nukleotida
<br />
Mutasi kromosom: delesi, duplikasi, inversi
<br />
Mutasi akibat radiasi/kimia
<br />
Dampak: netral, merugikan, atau menguntungkan.
<br />
      <li><strong> Biologi Molekuler</strong></li>  
      <br />
      1. Dogma Sentral
<br />
DNA → RNA → Protein
<br />
2. Tahapan
<br />
Replikasi: DNA mengganda
<br />
Transkripsi: DNA → mRNA
<br />
Translasi: mRNA → protein di ribosom
<br />
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