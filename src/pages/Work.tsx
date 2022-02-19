import { useParams } from "react-router";
import { works } from "../context";
import { NotFound } from "./NotFound";
import styles from "../styles/Work.module.scss";

export const Work = (): JSX.Element => {
  const { id } = useParams();
  const work = works.find((work) => work.id === Number(id));

  if (!work) {
    return <NotFound />;
  }

  return (
    <div className={`${styles["work-container"]} global-fadein`}>
      <div className={styles["work-grid"]}>
        <div className={styles["work-content-grid"]}>
          <div className={styles["work-headings"]}>
            <h2 style={{ fontSize: "4em" }}>{work.heading}</h2>
            <h2 style={{ fontSize: "3em" }}>{work.subheading}</h2>
          </div>
          <div>
            <h2 style={{ fontWeight: "lighter" }}>{work.brief}</h2>
          </div>
        </div>
        <div className={styles["work-img-grid"]}>
          {work.images.map((image) => (
            <img
              loading="lazy"
              src={image}
              alt="left"
              style={{ width: "50%" }}
              className={styles["work-img"]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
