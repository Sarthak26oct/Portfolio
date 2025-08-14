import React from "react";
import styles from "./Projects.module.css";
import { projects } from "../data";
import { FaProjectDiagram } from "react-icons/fa";

export default function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h2>
        <span className={styles.sectionIcon}>
          <FaProjectDiagram size={28} color="#bb6bd9" />
        </span>
        Projects
      </h2>
      <div className={styles.grid}>
        {projects.map((proj, i) => (
          <div className={styles.card} key={proj.title + i}>
            <div className={styles.imgBox}>
              <img src={proj.image} alt={proj.title} />
            </div>
            <div className={styles.info}>
              <h3 className={styles.title}>{proj.title}</h3>
              <h4 className={styles.type}>{proj.type}</h4>
              <div className={styles.stack}>
                {proj.stack.map((s, idx) => (
                  <span key={idx} className={styles.stackItem}>
                    {s}
                  </span>
                ))}
              </div>
              <p className={styles.description}>{proj.description}</p>
              <ul className={styles.contributions}>
                {proj.contributions &&
                  proj.contributions.map((c, idx) => <li key={idx}>{c}</li>)}
              </ul>
              {/* <div className={styles.links}>
                {proj.demo && (
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                {proj.code && (
                  <a href={proj.code} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                )}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
