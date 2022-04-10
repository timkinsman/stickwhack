import React from 'react';
import { Banner } from '../Banner';
import { Panel } from '../Panel';
import { works } from '../../context';
import styles from './Home.module.scss';

const Home = (): JSX.Element => (
  <div className='global-fadein'>
    <Banner />
    <div style={{ height: '100vh' }} />
    <div className={styles['panel-container']} id='panel-container'>
      {works?.map((work) => (
        <Panel work={work} />
      ))}
    </div>
  </div>
);

export default Home;
