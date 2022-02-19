import styles from "../styles/Panel.module.scss";
import { Sticker } from "./Sticker";

interface PanelProps {
  left: string;
  right: string;
  sticker?: {
    image: string;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    width?: string;
    rotate?: number;
  };
  title: string;
  desc: string;
  thumb: string;
}

export const Panel = ({
  left,
  right,
  sticker,
  title,
  desc,
  thumb,
}: PanelProps): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <div className={styles["left"]} style={{ background: left }}>
        <div
          className={styles["inner-left"]}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "calc(100% - 100px)",
          }}
        >
          <img src={thumb} style={{ width: "30%", margin: "auto 0" }} />
          <h1 style={{ fontSize: "4em", marginBottom: "20px" }}>{title}</h1>
          <h1 style={{ fontSize: "2em", lineHeight: "1.5em" }}>{desc}</h1>
        </div>
      </div>
      <div className={styles["right"]} style={{ background: right }}></div>
      {sticker && (
        <Sticker
          image={sticker.image}
          top={sticker.top}
          right={sticker.right}
          bottom={sticker.bottom}
          left={sticker.left}
          width={sticker.width}
          rotate={sticker.rotate}
        />
      )}
    </div>
  );
};
