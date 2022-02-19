import { Link, useLocation } from "react-router-dom";
import clowngirl from "../assets/clowngirl.png";
import styles from "../styles/SideNav.module.scss";

export const Nav = (): JSX.Element => {
  const location = useLocation();

  return (
    <div className={styles["nav-container"]}>
      <div className={styles["nav-links"]}>
        <Link
          to="/"
          className={
            location.pathname === "/" ? styles["nav-links-selected"] : ""
          }
        >
          <h2>work</h2>
        </Link>
        <Link
          to="/shop"
          className={
            location.pathname === "/shop" ? styles["nav-links-selected"] : ""
          }
        >
          <h2>shop</h2>
        </Link>
        <Link
          to="/about"
          className={
            location.pathname === "/about" ? styles["nav-links-selected"] : ""
          }
        >
          <h2>about</h2>
        </Link>
      </div>
      <div className={styles["nav-stickwhack"]}>
        <h1>stickwhack</h1>
      </div>
      <img src={clowngirl} alt="clowngirl" className={styles["nav-logo"]} />
    </div>
  );
};
