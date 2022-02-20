import { Panel } from "../components/Panel";
import stickernew from "../assets/new.png";
import wolga from "../assets/wolga.png";
import styles from "../styles/Home.module.scss";
import { Banner } from "../components/Banner";

export const Home = (): JSX.Element => (
  <div className={`global-fadein`}>
    <Banner />
    <div style={{ height: "100vh" }}></div>
    <div className={styles["panel-container"]} id="panel-container">
      <Panel
        thumb={wolga}
        title="LUCKY ZEP'S"
        desc="zeppy is a good boy. zeppy is a good boy. zeppy is a good boy. zeppy is a good boy. zeppy is a good boy. zeppy is a good boy. "
        left="#030305"
        right="#ff007a"
      />
      <Panel
        thumb={wolga}
        title="2021 FRINGE FESTIVAL"
        desc="i love kesha so much. i love kesha so much. i love kesha so much. i love kesha so much. i love kesha so much."
        left="#403672"
        right="#f1779c"
        sticker={{
          image: stickernew,
          top: -25,
          left: -25,
          width: "275px",
        }}
      />
      <Panel
        thumb={wolga}
        title="SCREENPRINTING"
        desc="kesh is amazing at everything she does. kesh is amazing at everything she does. kesh is amazing at everything she does."
        left="#d9012a"
        right="#fa806b"
      />
    </div>
  </div>
);
