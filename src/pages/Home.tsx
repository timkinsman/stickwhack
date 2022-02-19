import { Panel } from "../components/Panel";
import stickernew from "../assets/new.png";
import stickersmiley from "../assets/smiley.png";
import stickerwipblue from "../assets/wipblue.png";
import wolga from "../assets/wolga.png";
import styles from "../styles/Home.module.scss";
import { Banner } from "../components/Banner";

export const Home = (): JSX.Element => (
  <div className={`${styles["container"]} global-fadein`}>
    <Banner />
    <div className={`${styles["panel-container"]}`}>
      <Panel
        thumb={wolga}
        title="LUCKY ZEP'S"
        desc="zeppy is a good boy. zeppy is a good boy. zeppy is a good boy. zeppy is a good boy. zeppy is a good boy. zeppy is a good boy. "
        left="#030305"
        right="#ff007a"
        sticker={{
          image: stickernew,
          top: -25,
          left: -25,
          width: "275px",
        }}
      />
      <Panel
        thumb={wolga}
        title="2021 FRINGE FESTIVAL"
        desc="i love kesha so much. i love kesha so much. i love kesha so much. i love kesha so much. i love kesha so much."
        left="#403672"
        right="#f1779c"
        sticker={{
          image: stickersmiley,
          top: -25,
          left: -25,
        }}
      />
      <Panel
        thumb={wolga}
        title="SCREENPRINTING"
        desc="kesh is amazing at everything she does. kesh is amazing at everything she does. kesh is amazing at everything she does."
        left="#d9012a"
        right="#fa806b"
        sticker={{
          image: stickerwipblue,
          top: 125,
          left: 725,
          width: "275px",
        }}
      />
    </div>
  </div>
);
