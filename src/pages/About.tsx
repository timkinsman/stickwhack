import styles from '../styles/About.module.scss';

export const About = (): JSX.Element => (
  <div className={`${styles['container']} global-fadein`}>
    <div style={{ fontSize: '80px' }}>i like chicken noodles with butter.</div>
  </div>
);
