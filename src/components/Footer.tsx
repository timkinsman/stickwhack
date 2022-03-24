import { connect } from "react-redux";
import styles from "../styles/Footer.module.scss";

interface FooterProps {
  work?: string;
}

const _Footer = ({ work }: FooterProps): JSX.Element => (
  <div className={styles["container"]}>
    <div>
      <h1
        style={{
          color: "#FAE5C2",
          fontSize: "150px",
          fontFamily: "swear-display-cilati",
        }}
      >
        {work}
      </h1>
    </div>
  </div>
);

const mapStateToProps = (state: any) => ({
  work: state.work,
});

export const Footer = connect(mapStateToProps, null)(_Footer);
