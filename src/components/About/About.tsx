import React from 'react';
import styles from './About.module.scss';

const About = (): JSX.Element => (
  <div className={`${styles['container']} global-fadein`}>
    <div style={{ fontSize: '80px' }}>i like chicken noodles with butter.</div>
  </div>
);

export default About;
