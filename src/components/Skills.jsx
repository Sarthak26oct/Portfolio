import React from "react";
import styles from "./Skills.module.css";
import { skills } from "../data";
import { FaBolt } from "react-icons/fa";

export default function Skills() {
  return (
    <section className={styles.container} id="skills">
      <h2>
        <span className={styles.sectionIcon}>
          <FaBolt size={28} color="#fdc921" />
        </span>
        Skills
      </h2>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <div className={styles.skillCard} key={skill.name}>
            <span className={styles.icon}>{skill.icon}</span>
            <div className={styles.skillInfo}>
              <span>{skill.name}</span>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className={styles.level}>{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
