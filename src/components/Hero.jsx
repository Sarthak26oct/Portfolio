import React from "react";
import styles from "./Hero.module.css";
import { profile } from "../data";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <img
        src={profile.photo}
        alt={profile.name}
        className={styles.profileImage}
      />
      <h1 className={styles.title}>
        Hi, I'm <span className={styles.highlight}>{profile.name}</span>
      </h1>
      <div className={styles.tagline}>{profile.tagline}</div>
      <p className={styles.bio}>{profile.bio}</p>
      <div className={styles.ctaButtons}>
        <a href="#projects" className={styles.cta}>
          View My Work
        </a>
        <a href="#contact" className={styles.ctaOutline}>
          Contact
        </a>
      </div>
    </section>
  );
}
