import styles from '../styles/NotFound.module.scss';
import maji from '../assets/maji.jpg';

export const NotFound = (): JSX.Element => (
  <div className={`${styles['container']} global-fadein`}>
    <img src={maji} />
    <div style={{ fontSize: '80px' }}>square toe like majima</div>
  </div>
);
