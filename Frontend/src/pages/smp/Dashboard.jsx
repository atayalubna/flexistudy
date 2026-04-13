import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../App';
import { getStreak } from '../../utils/streak';
import '../dashboard.css';

const SUBJECTS = [
  { id: 1, emoji: '🔬', title: 'IPA', topic: 'Sistem Pencernaan Manusia', progress: 55, xp: 210, color: '#F0FDF4', route: '/dashboard/smp/materi/ipa' },
  { id: 2, emoji: '📖', title: 'Bahasa Indonesia', topic: 'Teks Eksposisi & Argumentasi', progress: 83, xp: 410, color: '#FFF7ED', route: '/dashboard/smp/materi/bahasa-indonesia' },
  { id: 3, emoji: '🌐', title: 'Bahasa Inggris', topic: 'Descriptive Text', progress: 61, xp: 290, color: '#F0F9FF', route: '/dashboard/smp/materi/bahasa-inggris' },
];

const ACTIVITIES = [
  { emoji: '✅', text: 'Menyelesaikan latihan Persamaan Linear', time: '2 jam lalu', xp: '+20 XP' },
  { emoji: '🏆', text: 'Naik ke Level 3!', time: '1 hari lalu', xp: '+50 XP' },
  { emoji: '📖', text: 'Membaca materi Sistem Pencernaan', time: '1 hari lalu', xp: '+10 XP' },
  { emoji: '⭐', text: 'Streak hari berturut-turut', time: '2 hari lalu', xp: '+30 XP' },
];

const DashboardSMP = () => {
  const { user, logout, darkMode, setDarkMode, ttsEnabled, setTtsEnabled, highContrast, setHighContrast, speak } = useApp();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('beranda');
  const [ttsText, setTtsText] = useState('');
  const [ttsReading, setTtsReading] = useState(false);
  const streak = getStreak();

  const initials = (user?.name || 'U').split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  const weekProgress = Math.round(SUBJECTS.reduce((a, s) => a + s.progress, 0) / SUBJECTS.length);

  const handleTTSRead = () => {
    if (!ttsText.trim()) { speak('Ketik teks terlebih dahulu.'); return; }
    setTtsReading(true);
    const utt = new SpeechSynthesisUtterance(ttsText);
    utt.lang = 'id-ID';
    utt.rate = 0.92;
    utt.onend = () => setTtsReading(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utt);
  };

  const stopTTS = () => { window.speechSynthesis.cancel(); setTtsReading(false); };

  return (
    <div className="dash-page">
      <aside className="sidebar">
        <div className="sb-logo">
          <div className="li">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L11.5 4V10L7 13L2.5 10V4L7 1Z" stroke="#fff" strokeWidth="1.5"/>
              <circle cx="7" cy="7" r="2" fill="#fff"/>
            </svg>
          </div>
          <span className="ln">Flexi<span>Study</span></span>
        </div>

        <nav className="sb-nav">
          {[
            ['beranda', '🏠', 'Beranda'],
            ['materi', '📚', 'Materi'],
            ['tts', '🔊', 'Text-to-Speech'],
          ].map(([id, icon, label]) => (
            <button
              key={id}
              className={`sb-item${activeTab === id ? ' active' : ''}`}
              onClick={() => { setActiveTab(id); speak(label); }}
            >
              <span>{icon}</span> {label}
            </button>
          ))}
        </nav>

        <div className="sb-badge-jenjang">SMP</div>

        <div className="sb-user">
          <div className="sb-av">{initials}</div>
          <div>
            <div className="sb-name">{user?.name || "Siswa"}</div>
            <div className="sb-kelas">{user?.kelas || "SMP"}</div>
          </div>
          <button className="sb-logout" onClick={() => { logout(); navigate('/'); }} title="Keluar">↩</button>
        </div>
      </aside>

      <main className="dash-main">
        <div className="dash-header">
          <div>
            <div className="dash-greeting">Halo, {(user?.name || "Teman Belajar").split(' ')[0]}! 👋</div>
            <div className="dash-sub">Ayo lanjutkan belajar hari ini</div>
          </div>
          <div className="dash-header-right">
            <button className={`nb-icon${darkMode ? ' active' : ''}`} onClick={() => setDarkMode(v => !v)} title="Dark Mode">
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button className={`nb-icon${highContrast ? ' active' : ''}`} onClick={() => setHighContrast(v => !v)} title="High Contrast">🔆</button>
            <button className={`nb-icon${ttsEnabled ? ' active' : ''}`} onClick={() => setTtsEnabled(v => !v)} title="TTS">
              {ttsEnabled ? '🔊' : '🔇'}
            </button>
            <Link to="/" className="dash-home-btn">← Beranda</Link>
          </div>
        </div>

        {activeTab === 'beranda' && (
          <div className="tab-content">
            <div className="stat-row">
              <StatCard icon="🔥" label="Streak" value={`${streak} hari`} active={streak > 0} />
              <StatCard icon="📊" label="Progress Minggu" value={`${weekProgress}%`} />
            </div>

            <div className="section-title">📚 Progress Mata Pelajaran SMP</div>
            <div className="subject-grid">
              {SUBJECTS.map(s => (
                <div key={s.id} className="subj-card" onClick={() => speak(`${s.title}. ${s.topic}. Progress ${s.progress} persen.`)}>
                  <div className="subj-head">
                    <div className="subj-icon" style={{ background: s.color }}>{s.emoji}</div>
                    <div>
                      <div className="subj-title">{s.title}</div>
                      <div className="subj-topic">{s.topic}</div>
                    </div>
                    <div className="subj-xp">+{s.xp} XP</div>
                  </div>
                  <div className="bar">
                    <div className="bf" style={{ width: `${s.progress}%` }}></div>
                  </div>
                  <div className="subj-pct">{s.progress}%</div>
                </div>
              ))}
            </div>

            <div className="section-title">🕐 Aktivitas Terbaru</div>
            <div className="activity-list">
              {ACTIVITIES.map((a, i) => (
                <div key={i} className="act-item">
                  <span className="act-icon">{a.emoji}</span>
                  <span className="act-text">{a.text}</span>
                  <span className="act-time">{a.time}</span>
                  <span className="act-xp">{a.xp}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'materi' && (
          <div className="tab-content">
            <div className="section-title">📚 Materi SMP</div>
            <div className="subject-grid">
              {SUBJECTS.map(s => (
                <div key={s.id} className="subj-card full">
                  <div className="subj-head">
                    <div className="subj-icon" style={{ background: s.color }}>{s.emoji}</div>
                    <div style={{ flex: 1 }}>
                      <div className="subj-title">{s.title}</div>
                      <div className="subj-topic">{s.topic}</div>
                    </div>
                  </div>
                  <div className="bar"><div className="bf" style={{ width: `${s.progress}%` }}></div></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginTop: '4px' }}>
                    <span>Progress: {s.progress}%</span>
                    <span>{s.xp} XP</span>
                  </div>
                  <button className="subj-btn" onClick={() => {
                    speak(`Melanjutkan materi ${s.title}`);
                    navigate(s.route, { state: { title: s.title, topic: s.topic } });
                  }}>
                    Lanjutkan →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tts' && (
          <div className="tab-content">
            <div className="section-title">🔊 Text-to-Speech</div>
            <div className="tts-card">
              <label className="tts-label">Ketik teks untuk dibacakan:</label>
              <textarea
                className="tts-input"
                placeholder="Ketik sesuatu di sini..."
                value={ttsText}
                onChange={e => setTtsText(e.target.value)}
                rows={5}
              />
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button className="btn-full" onClick={handleTTSRead} disabled={ttsReading}>
                  {ttsReading ? '⏳ Membaca...' : '▶️ Baca'}
                </button>
                <button className="btn-full" style={{ background: '#666' }} onClick={stopTTS}>
                  ⏹ Stop
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const StatCard = ({ icon, label, value, active }) => (
  <div className={`stat-card${active ? ' streak-active' : ''}`}>
    <div className="stat-icon">{icon}</div>
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

export default DashboardSMP;