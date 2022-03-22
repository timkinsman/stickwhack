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
        logo={wolga}
        thumbs={[wolga, wolga, wolga]}
        title="LUCKY ZEP'S"
        desc="zeppy is a good boy. zeppy is a good boy. zeppy is a good boy. zeppy is a good boy. zeppy is a good boy. zeppy is a good boy. "
        left="#272727"
        right="#000000"
      />
      <Panel
        logo={wolga}
        thumbs={[wolga, wolga, wolga]}
        title="2021 FRINGE FESTIVAL"
        desc="i love kesha so much. i love kesha so much. i love kesha so much. i love kesha so much. i love kesha so much."
        left="#FFE6E6"
        right="#f1779c"
        sticker={{
          image: stickernew,
          top: -25,
          left: -25,
          width: "275px",
        }}
      />
      <Panel
        logo={wolga}
        thumbs={[wolga, wolga, wolga]}
        title="SCREENPRINTING"
        desc="kesh is amazing at everything she does. kesh is amazing at everything she does. kesh is amazing at everything she does."
        left="#F5F7EC"
        right="#fa806b"
      />
      <Panel
        logo={wolga}
        thumbs={[wolga, wolga, wolga]}
        title="SCREENPRINTING"
        desc="kesh is amazing at everything she does. kesh is amazing at everything she does. kesh is amazing at everything she does."
        left="#C9C7FF"
        right="#fa806b"
      />
    </div>
  </div>
);
