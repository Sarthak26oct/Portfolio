import React from "react";
import styles from "./About.module.css";
import { about } from "../data";
import { FaInfoCircle } from "react-icons/fa";

export default function About() {
  return (
    <section className={styles.container} id="about">
      <h2>
        <span className={styles.sectionIcon}>
          <FaInfoCircle size={28} color="#35b5fc" />
        </span>
        About Me
      </h2>
      <div className={styles.bio}>{about.summary}</div>
    </section>
  );
}
