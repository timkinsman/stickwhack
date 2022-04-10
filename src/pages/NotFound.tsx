import React from 'react';
import maji from '../assets/maji.jpg';
import styles from '../styles/NotFound.module.scss';

export const NotFound = (): JSX.Element => (
  <div className={`${styles['container']} global-fadein`}>
    <img alt='maji' src={maji} />
    <div style={{ fontSize: '80px' }}>square toe like majima</div>
  </div>
);
