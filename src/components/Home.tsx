import { Grid } from "./Grid"

import styles from "../styles/Home.module.scss"

export const Home = (): JSX.Element => {
    return (
        <div className={styles["home-container"]}>
            <Grid />
        </div>
    )
}