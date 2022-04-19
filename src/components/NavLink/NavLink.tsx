import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import $ from 'jquery';
import useStyles from './NavLinkStyles';

const propTypes = {
  route: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

type NavLinkProps = PropTypes.InferProps<typeof propTypes>;

const NavLink = ({ route, label }: NavLinkProps) => {
  const classes = useStyles();
  const location = useLocation();

  const handleOnClick = () =>
    $('html,body').animate(
      {
        scrollTop: 0,
      },
      'slow',
    );

  return location.pathname === route ? (
    /* eslint-disable */
    <a onClick={handleOnClick} className={classes.selected}>
      {label}
    </a>
  ) : (
    <Link to={route}>{label}</Link>
  );
};

NavLink.propTypes = propTypes;

export default NavLink;
