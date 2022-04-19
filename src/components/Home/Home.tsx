import React from 'react';
import { Banner } from '../Banner';
import { Panel } from '../Panel';
import { works } from '../../context';
import useStyles from './HomeStyles';

const Home = (): JSX.Element => {
  const classes = useStyles()
  return(
  <div className='global-fadein'>
    <Banner />
    <div style={{ height: '100vh' }} />
    <div className={classes.panelContainer} id='panel-container'>
      {works?.map((work) => (
        <Panel work={work} />
      ))}
    </div>
  </div>
)};

export default Home;
