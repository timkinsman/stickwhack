import styles from "../styles/Shop.module.scss";

export const Shop = (): JSX.Element => (
  <div className={`${styles["container"]} global-fadein`}>
    <h1 style={{ fontSize: "80px", fontWeight: 400 }}>Coming soon</h1>
  </div>
);
