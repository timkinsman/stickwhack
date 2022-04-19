import React from 'react';
import { NavLink } from '../NavLink';
import useStyles from './NavStyles';

const Nav = (): JSX.Element => {
  const classes = useStyles()
  return(
  <>
    <button type='button' className={classes.whyStickwhack}>
      <a href='https://www.youtube.com/watch?v=Yhe7rcDUTeI' target='_blank' rel='noreferrer'>
        why stickwhack?
      </a>
    </button>

    <div className={classes.stickwhack}>
      <NavLink route='/' label='stickwhack' />
    </div>

    <div className={classes.links}>
      <NavLink route='/about' label='about' />
    </div>
  </>
)};

export default Nav;
