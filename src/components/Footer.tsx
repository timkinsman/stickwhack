import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { State } from '../interfaces';
import styles from '../styles/Footer.module.scss';

const propTypes = {
  workTitle: PropTypes.string,
};

type FooterProps = PropTypes.InferProps<typeof propTypes>;

const _Footer = ({ workTitle }: FooterProps): JSX.Element => (
  <div className={styles['container']}>
    <div className={styles['heading']}>{workTitle}</div>
  </div>
);

_Footer.defaultProps = {
  workTitle: null,
};

_Footer.propTypes = propTypes;

const mapStateToProps = (state: State) => ({
  workTitle: state?.work?.title,
});

export const Footer = connect(mapStateToProps, null)(_Footer);
