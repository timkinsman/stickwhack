import { useEffect, useState } from "react";
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
  logo: string;
  thumbs: string[];
}

export const Panel = ({
  left,
  right,
  sticker,
  title,
  desc,
  logo,
  thumbs,
}: PanelProps): JSX.Element => {
  const [pagination, setPagination] = useState(0);

  const handleOnClick = (next: number) =>
    next < 0
      ? setPagination(thumbs.length - 1)
      : setPagination(next % thumbs.length);

  return (
    <div className={styles["container"]}>
      <div className={styles["left"]} style={{ background: left }}>
        <img src={logo} alt="" style={{ width: "30%", margin: "auto 0" }} />
        <h1 style={{ fontSize: "4em", marginBottom: "20px" }}>{title}</h1>
        <h1
          style={{
            fontSize: "em",
            lineHeight: "1.5em",
            marginBottom: "40px",
          }}
        >
          {desc}
        </h1>
      </div>
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <button
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            zIndex: 99,
          }}
          onClick={() => handleOnClick(pagination - 1)}
        >
          left
        </button>
        <button
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            zIndex: 99,
          }}
          onClick={() => handleOnClick(pagination + 1)}
        >
          right
        </button>
        <div
          style={{
            position: "absolute",
            display: "grid",
            gridTemplateColumns: `repeat(${thumbs.length}, 1fr)`,
            width: `${thumbs.length * 100}%`,
            left: `${pagination * -100}%`,
            transition: "left 2s",
          }}
        >
          {thumbs.map((thumb) => (
            <div className={styles["right"]} style={{ background: right }}>
              <img style={{ width: "50%" }} alt="" src={thumb} />
            </div>
          ))}
        </div>
      </div>
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
