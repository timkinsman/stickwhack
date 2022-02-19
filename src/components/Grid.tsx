import { Link } from "react-router-dom";
import { works } from "../context";
import styles from "../styles/Grid.module.scss";
import { Sticker } from "./Sticker";
import { Thumbnail } from "./Thumbnail";

export const Grid = (): JSX.Element => (
  <div className={styles["grid-container"]}>
    {works.map((work) => (
      <Link to={`/work/${work.id}`} style={{ margin: work.margin }}>
        <div className={styles["grid-item"]}>
          {work.stickers?.map((sticker) => (
            <Sticker
              image={sticker.image}
              top={sticker.top}
              right={sticker.right}
              bottom={sticker.bottom}
              left={sticker.left}
              width={sticker.width}
              rotate={sticker.rotate}
            />
          ))}
          <Thumbnail image={work.thumbnail} />
        </div>
      </Link>
    ))}
  </div>
);
