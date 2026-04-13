// Frontend/src/utils/streak.js

export function getStreak() {
  const today = new Date().toDateString();
  const last = localStorage.getItem("fs_last_login");
  let streak = parseInt(localStorage.getItem("fs_streak") || "0");

  if (last === today) return streak; // sudah login hari ini, jangan tambah

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (last === yesterday.toDateString()) {
    streak += 1; // lanjut streak
  } else {
    streak = 1; // reset, skip sehari
  }

  localStorage.setItem("fs_streak", String(streak));
  localStorage.setItem("fs_last_login", today);
  return streak;
}