import React from 'react';
import maji from '../../assets/maji.jpg';
import useStyles from './NotFoundStyles';

const NotFound = (): JSX.Element => {
  const classes = useStyles()
  return(
  <div className={`${classes.container} global-fadein`}>
    <img alt='maji' src={maji} />
    <div style={{ fontSize: '80px' }}>square toe like majima</div>
  </div>
)};

export default NotFound;
