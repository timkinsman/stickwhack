import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { workPropsTypes } from '../propTypes';
import styles from '../styles/Footer.module.scss';

const propTypes = {
  work: workPropsTypes,
};

type FooterProps = PropTypes.InferProps<typeof propTypes>;

const _Footer = ({ work }: FooterProps): JSX.Element => (
  <div className={styles['container']}>
    <div className={styles['heading']}>{work?.title}</div>
  </div>
);

_Footer.propTypes = propTypes;

const mapStateToProps = (state: any) => ({
  work: state.work,
});

export const Footer = connect(mapStateToProps, null)(_Footer);
