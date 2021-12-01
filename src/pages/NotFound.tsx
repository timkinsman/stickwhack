import styles from "../styles/NotFound.module.scss"

export const NotFound = (): JSX.Element => {
    return (
        <div className={`${styles["notfound-container"]} global-fadein`}>
            <h1>Page Not Found</h1>
        </div>
    )
}