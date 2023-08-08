import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link className={styles.navLogo} href="/">
          Joaquin Solis
        </Link>
      </div>
      <div className={styles.linkContainer}>
        <a
          className={styles.navbarLink}
          href="https://www.linkedin.com/in/joaquinsolis/"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          className={styles.navbarLink}
          href="mailto:joaquinsolis93@gmail.com"
          target="_blank"
        >
          Mail
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
