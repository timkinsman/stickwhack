import React from 'react';
import useStyles from './AboutStyles';

const About = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={`${classes.container} global-fadein`}>
      <div style={{ fontSize: '80px' }}>i like chicken noodles with butter.</div>
    </div>
  );
};

export default About;
