import { Link } from "react-router-dom";
import dog from "../assets/logo.png"

import styles from "../styles/Nav.module.scss";

export const Nav = (): JSX.Element => {
    return (
        <div className={styles["nav-container"]}>
            <div className={styles["nav-links"]}>
                <Link to="/work">work</Link>
                <Link to="/shop">shop</Link>
                <Link to="/about">about</Link>
            </div>
            <div className={styles["nav-stickwhack"]}><h3>stickwhack</h3></div> 
            <Link to="/" style={{textAlign: "center"}}><img src={dog} alt="dog" className={styles["nav-logo"]} /></Link>
        </div>
    )
}