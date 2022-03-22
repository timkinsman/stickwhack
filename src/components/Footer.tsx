import styles from "../styles/Footer.module.scss";

interface FooterProps {
  heading: string;
}

export const Footer = ({ heading }: FooterProps): JSX.Element => (
  <div className={styles["container"]}>
    <div>
      <h1 style={{ color: "#FAE5C2" }}>{heading}</h1>
    </div>
  </div>
);
