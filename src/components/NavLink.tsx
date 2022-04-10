import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import $ from 'jquery';
import styles from '../styles/NavLink.module.scss';

const propTypes = {
  route: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

type NavLinkProps = PropTypes.InferProps<typeof propTypes>;

export const NavLink = ({ route, label }: NavLinkProps) => {
  const location = useLocation();

  const handleOnClick = () =>
    $('html,body').animate(
      {
        scrollTop: 0,
      },
      'slow',
    );

  return location.pathname === route ? (
    <a onClick={handleOnClick} className={styles['selected']}>
      {label}
    </a>
  ) : (
    <Link to={route}>{label}</Link>
  );
};

NavLink.propTypes = propTypes;
