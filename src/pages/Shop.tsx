import styles from '../styles/Shop.module.scss';

export const Shop = (): JSX.Element => (
  <div className={`${styles['container']} global-fadein`}>
    <div style={{ fontSize: '80px', fontWeight: 400 }}>Coming soon</div>
  </div>
);
