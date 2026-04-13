import React, { createContext, useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Dashboard from "./pages/dashboard";

// SD
import DashboardSD from "./pages/sd/Dashboard";
import MateriIPA_SD from "./pages/sd/MateriIPA";
import MateriBahasaIndonesia_SD from "./pages/sd/MateriBahasaIndonesia";
import MateriBahasaInggris_SD from "./pages/sd/MateriBahasaInggris";

// SMP
import DashboardSMP from "./pages/smp/Dashboard";
import MateriIPA_SMP from "./pages/smp/MateriIPA";
import MateriBahasaIndonesia_SMP from "./pages/smp/MateriBahasaIndonesia";
import MateriBahasaInggris_SMP from "./pages/smp/MateriBahasaInggris";

// SMA
import DashboardSMA from "./pages/sma/Dashboard";
import MateriIPA_SMA from "./pages/sma/MateriIPA";
import MateriBahasaIndonesia_SMA from "./pages/sma/MateriBahasaIndonesia";
import MateriBahasaInggris_SMA from "./pages/sma/MateriBahasaInggris";

export const AppContext = createContext(null);
export function useApp() { return useContext(AppContext); }

function App() {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("fs_user")) || null; } catch { return null; }
  });
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("fs_dark") === "1");
  const [ttsEnabled, setTtsEnabled] = useState(() => localStorage.getItem("fs_tts") === "1");
  const [highContrast, setHighContrast] = useState(() => localStorage.getItem("fs_hc") === "1");

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", darkMode ? "dark" : "light");
    root.setAttribute("data-hc", highContrast ? "1" : "0");
    localStorage.setItem("fs_dark", darkMode ? "1" : "0");
    localStorage.setItem("fs_hc", highContrast ? "1" : "0");
  }, [darkMode, highContrast]);

  useEffect(() => {
    localStorage.setItem("fs_tts", ttsEnabled ? "1" : "0");
  }, [ttsEnabled]);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("fs_user", JSON.stringify(userData));
  };

  const register = (userData) => {
    setUser(userData);
    localStorage.setItem("fs_user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("fs_user");
  };

  const speak = (text) => {
    if (!ttsEnabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = "id-ID";
    utt.rate = 0.92;
    window.speechSynthesis.speak(utt);
  };

  const ctx = {
    user, login, register, logout,
    darkMode, setDarkMode,
    ttsEnabled, setTtsEnabled,
    highContrast, setHighContrast,
    speak
  };

  return (
    <AppContext.Provider value={ctx}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* ✅ SD */}
          <Route path="/dashboard/sd" element={<DashboardSD />} />
          <Route path="/dashboard/sd/materi/ipa" element={<MateriIPA_SD />} />
          <Route path="/dashboard/sd/materi/bahasa-indonesia" element={<MateriBahasaIndonesia_SD />} />
          <Route path="/dashboard/sd/materi/bahasa-inggris" element={<MateriBahasaInggris_SD />} />

          {/* ✅ SMP */}
          <Route path="/dashboard/smp" element={<DashboardSMP />} />
          <Route path="/dashboard/smp/materi/ipa" element={<MateriIPA_SMP />} />
          <Route path="/dashboard/smp/materi/bahasa-indonesia" element={<MateriBahasaIndonesia_SMP />} />
          <Route path="/dashboard/smp/materi/bahasa-inggris" element={<MateriBahasaInggris_SMP />} />

          {/* ✅ SMA */}
          <Route path="/dashboard/sma" element={<DashboardSMA />} />
          <Route path="/dashboard/sma/materi/ipa" element={<MateriIPA_SMA />} />
          <Route path="/dashboard/sma/materi/bahasa-indonesia" element={<MateriBahasaIndonesia_SMA />} />
          <Route path="/dashboard/sma/materi/bahasa-inggris" element={<MateriBahasaInggris_SMA />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;