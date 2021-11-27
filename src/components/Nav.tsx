import { Link } from "react-router-dom";
import clowngirl from "../assets/clowngirl.png"

import styles from "../styles/Nav.module.scss";

export const Nav = (): JSX.Element => {
    return (
        <div className={styles["nav-container"]}>
            <div className={styles["nav-links"]}>
                <Link to="/"><h2>work</h2></Link>
                <Link to="/shop"><h2>shop</h2></Link>
                <Link to="/about"><h2>about</h2></Link>
            </div>
            <div className={styles["nav-stickwhack"]}><h1>stickwhack</h1></div> 
            <img src={clowngirl} alt="clowngirl" className={styles["nav-logo"]} />
        </div>
    )
}