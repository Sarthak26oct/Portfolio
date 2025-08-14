import React from "react";
import styles from "./Experience.module.css";
import { experience } from "../data";
import { FaBriefcase, FaUserTie } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const companyIcons = {
  Wipro: <FaBriefcase size={34} color="#68217A" />,
  "Freelance Web Developer": <FaUserTie size={34} color="#00C896" />,
};

export default function Experience() {
  return (
    <section className={styles.container} id="experience">
      <h2>
        <span className={styles.sectionIcon} tabIndex={0}>
          <MdWork size={30} color="#6a5af9" />
        </span>
        Experience
      </h2>
      <div className={styles.timeline}>
        {experience.map((exp, idx) => (
          <div className={styles.entry} key={exp.company}>
            <div className={styles.icon}>
              {companyIcons[exp.company] || <FaBriefcase size={32} />}
            </div>
            <div>
              <h3>
                {exp.company} <span className={styles.role}>[{exp.role}]</span>
              </h3>
              <span className={styles.duration}>{exp.duration}</span>
              <ul className={styles.responsibilities}>
                {exp.responsibilities.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
