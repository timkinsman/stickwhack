import styles from "../styles/Banner.module.scss";
import $ from "jquery";
import smiley from "../assets/smiley.png";

export const Banner = (): JSX.Element => {
  const handleOnClick = (id: string) =>
    $("html,body").animate(
      {
        scrollTop: $(id).offset()?.top,
      },
      "slow"
    );

  return (
    <div className={styles["outer-container"]}>
      <div className={styles["container"]}>
        <div style={{ display: "flex", gap: "12px", alignItems: "baseline" }}>
          <h1
            style={{
              fontSize: "230px",
              fontFamily: "swear-display-cilati",
              marginLeft: "-60px",
              paddingRight: "36px",
            }}
          >
            hello!
          </h1>
          {[...Array(12)].map(() => (
            <img
              className={styles["smiley"]}
              src={smiley}
              style={{ height: "142px", animationDelay: `${Math.random()}s` }}
            />
          ))}
        </div>
        <h1
          style={{
            fontSize: "80px",
            fontFamily: "Helvetica",
            fontWeight: 400,
            marginTop: "-30px",
            lineHeight: "90px",
          }}
        >
          my name is kesha (aka stickwhack){" "}
          <button
            className={styles["button"]}
            onClick={() => handleOnClick("#panel-container")}
          >
            and i’m a graphic designer/illustrator
          </button>
        </h1>
      </div>
      <button style={{ position: "absolute", top: 50, right: 50 }}>
        <h4 style={{ fontWeight: 400, fontSize: "30px" }}>
          <a href="https://www.youtube.com/watch?v=Yhe7rcDUTeI" target="_blank">
            why stickwhack?
          </a>
        </h4>
      </button>
    </div>
  );
};
