import React from "react";
import styles from "../styles/AppContainer.module.scss";

interface AppContainerProps {
  children?: JSX.Element | JSX.Element[];
}

export const AppContainer = ({ children }: AppContainerProps) => (
  <div className={styles["container"]}>{children}</div>
);
