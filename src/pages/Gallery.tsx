import { Grid } from "../components/Grid";
import styles from "../styles/Gallery.module.scss";

export const Gallery = (): JSX.Element => (
  <div className={`${styles["container"]} global-fadein`}>
    <Grid />
  </div>
);
