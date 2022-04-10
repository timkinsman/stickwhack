import React from 'react';
import { NavLink } from './NavLink';
import styles from '../styles/Nav.module.scss';

export const Nav = (): JSX.Element => (
  <>
    <button className={styles['whyStickwhack']}>
      <a href='https://www.youtube.com/watch?v=Yhe7rcDUTeI' target='_blank' rel='noreferrer'>
        why stickwhack?
      </a>
    </button>

    <div className={styles['stickwhack']}>
      <NavLink route='/' label='stickwhack' />
    </div>

    <div className={styles['links']}>
      <NavLink route='/about' label='about' />
      {/* <NavLink route='/gallery' label='gallery' />
      <NavLink route='/shop' label='shop' /> */}
    </div>
  </>
);
