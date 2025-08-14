import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "./Header.module.css";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => scrollTo("home")}>
        Portfolio
      </div>

      <button
        className={styles.menuButton}
        aria-label="Toggle navigation menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
        {["home", "about", "experience", "skills", "projects", "contact"].map(
          (section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className={styles.navButton}
            >
              {section.toUpperCase()}
            </button>
          )
        )}

        <button
          onClick={toggleTheme}
          className={styles.themeButton}
          aria-label="Toggle Light/Dark Theme"
        >
          {isDark ? "☀ Light" : "🌙 Dark"}
        </button>
      </nav>
    </header>
  );
}
