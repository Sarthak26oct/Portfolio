import React from "react";
import styles from "./Contact.module.css";
import { contact } from "../data";
import { MdEmail } from "react-icons/md";
import {
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <h2>
        <span className={styles.sectionIcon}>
          <FaPaperPlane size={27} color="#ed6c02" />
        </span>
        Contact
      </h2>
      <p className={styles.lead}>
        Interested in connecting or collaborating? Reach out via email or any of
        my socials!
      </p>
      <div className={styles.contactGrid}>
        <a
          href={`mailto:${contact.email}`}
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail size={38} style={{ color: "#ed6c02" }} />
          <span>Email</span>
        </a>
        <a
          href={contact.linkedin}
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={38} style={{ color: "#0a66c2" }} />
          <span>LinkedIn</span>
        </a>
        <a
          href={contact.github}
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={38} style={{ color: "#222" }} />
          <span>GitHub</span>
        </a>
        <div className={styles.card}>
          <FaPhone size={38} style={{ color: "#f44336" }} />
          <span>+91 9548734834</span>
        </div>
        <div className={styles.card}>
          <FaMapMarkerAlt size={38} style={{ color: "#f44336" }} />
          <span>F-1402 JM Florence, Greate Noida, India</span>
        </div>
      </div>
    </section>
  );
}
