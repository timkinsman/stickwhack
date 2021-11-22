import styles from "../styles/Grid.module.scss"

export const Grid = (): JSX.Element => {
    return (
        <div className={styles["grid-container"]}>
            {[0, 1, 2, 3, 4, 5, 6, 7,].map((el, i) => {
                return (
                    <div className={styles["grid-item"]}> 
                        {el}
                    </div>
                )
            })}
        </div>
    )
}