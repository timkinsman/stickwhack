import styles from "../styles/NotFound.module.scss";

export const NotFound = (): JSX.Element => (
  <div className={`${styles["container"]} global-fadein`}>
    <h1 style={{ fontSize: "3em" }}>Page Not Found</h1>
  </div>
);
