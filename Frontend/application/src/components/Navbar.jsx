//create a Navbar component which contains a logo and a button,Dashboard,Login and menu
import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.Navbar}>
      <div>
        <div className={styles.Logo}>JIDOKA TECH </div>
      </div>
      <div>
        <button
          className={styles.NavbarBt}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>
        <button
          className={styles.NavbarBt}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className={styles.NavbarBt}
          onClick={() => navigate("/menu")}
        >
          Menu
        </button>
      </div>
    </div>
  );
};

export default Navbar;
