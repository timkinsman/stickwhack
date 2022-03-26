import styles from '../styles/NotFound.module.scss';

export const NotFound = (): JSX.Element => (
  <div className={`${styles['container']} global-fadein`}>
    <div style={{ fontSize: '3em' }}>Page Not Found</div>
  </div>
);
