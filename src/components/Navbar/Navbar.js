import React from "react";
import styles from "./Navbar.module.scss";
import Button from "../Button/Button";
import Logo from "../../assets/images/logo.svg";

function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        zIndex: 10,
      }}
    >
      <div className={styles.navContainer}>
        <img src={Logo} style={{ objectFit: "contain" }} alt="" />

        <ul className={styles.navLinks}>
          <li>
            <a className={styles.link} href="#">
              Features
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Resources
            </a>
          </li>
        </ul>

        <div className={styles.authButtons}>
          <a href="#" className={styles.link}>
            Login
          </a>
          <Button rounded={true}>Sign Up</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
