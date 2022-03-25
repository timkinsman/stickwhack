import styles from '../styles/About.module.scss';

export const About = (): JSX.Element => (
  <div className={`${styles['container']} global-fadein`}>
    <h1 style={{ fontSize: '80px', fontWeight: 400 }}>i like chicken noodles with butter.</h1>
  </div>
);
