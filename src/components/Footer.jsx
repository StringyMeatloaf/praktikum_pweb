import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.contentContainer}>
        <p style={styles.text}>
          &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </p>
        <ul style={styles.socialLinks}>
          <li style={styles.linkItem}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Facebook</a>
          </li>
          <li style={styles.linkItem}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Twitter</a>
          </li>
          <li style={styles.linkItem}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    padding: "20px 0",
    textAlign: "center",
  },
  contentContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  text: {
    margin: "0 0 10px",
    fontSize: "14px",
  },
  socialLinks: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  linkItem: {
    display: "inline",
  },
  link: {
    color: "#ecf0f1",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.3s",
  },
  linkHover: {
    color: "#3498db",
  },
};

export default Footer;
