import { useEffect, useState } from "react";
import { ReactComponent as Moon } from "../assets/moon.svg";
import { ReactComponent as Sun } from "../assets/sun.svg";
import styles from "../styles/Banner.module.scss";
import $ from "jquery";

const SECOND_MS = 1000;

export const Banner = (): JSX.Element => {
  const [wink, setWink] = useState(false);
  const [lightMode, setLightMode] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWink(!wink);
    }, SECOND_MS);

    return () => clearTimeout(timeout);
  }, [wink]);

  useEffect(() => {
    $("#root").css({
      background: lightMode ? "#FFFFFF" : "#030305",
      color: lightMode ? "#000000" : "#FFFFFF",
    });
  }, [lightMode]);

  const handleOnClick = (id: string) => {
    $("html,body").scrollTop($(id).offset()?.top || 0);
  };

  return (
    <div className={styles["outer-container"]}>
      <div className={styles["container"]}>
        <h1 style={{ fontSize: "8em" }}>HI I'M KE$HA! {wink ? ";" : ":"})</h1>
        <h1 style={{ fontSize: "4em" }}>
          I'm an{" "}
          <button
            className={styles["button"]}
            onClick={() => handleOnClick("#panel-container")}
          >
            extremly talented graphic designer
          </button>{" "}
          (you'll have to remind me)
        </h1>
      </div>
      {!lightMode ? (
        <button
          onClick={() => setLightMode(true)}
          style={{ position: "absolute", top: 50, right: 50 }}
        >
          <Sun
            height={96}
            width={96}
            fill="currentColor"
            stroke="currentColor"
          />
        </button>
      ) : (
        <button
          onClick={() => setLightMode(false)}
          style={{ position: "absolute", top: 50, right: 50 }}
        >
          <Moon
            height={96}
            width={96}
            fill="currentColor"
            stroke="currentColor"
          />
        </button>
      )}
    </div>
  );
};
