import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Nav.module.scss";

export const Nav = (): JSX.Element => {
  const location = useLocation();

  return (
    <div className={styles["container"]}>
      <Link
        to="/"
        className={
          location.pathname === "/" ? styles["links-selected"] : ""
        }
      >
        <h2>stickwhack</h2>
      </Link>
      <div className={styles["links"]}>
        <Link
          to="/about"
          className={
            location.pathname === "/about" ? styles["links-selected"] : ""
          }
        >
          <h2>about</h2>
        </Link>
        <Link
          to="/gallery"
          className={
            location.pathname === "/gallery" ? styles["links-selected"] : ""
          }
        >
          <h2>gallery</h2>
        </Link>
        <Link
          to="/shop"
          className={
            location.pathname === "/shop" ? styles["links-selected"] : ""
          }
        >
          <h2>shop</h2>
        </Link>
      </div>
    </div>
  );
};
