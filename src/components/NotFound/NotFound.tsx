import React from 'react';
import maji from '../../assets/maji.jpg';
import styles from './NotFound.module.scss';

const NotFound = (): JSX.Element => (
  <div className={`${styles['container']} global-fadein`}>
    <img alt='maji' src={maji} />
    <div style={{ fontSize: '80px' }}>square toe like majima</div>
  </div>
);

export default NotFound;
