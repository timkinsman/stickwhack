import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../interfaces';
import styles from './Footer.module.scss';

const propTypes = {
  workTitle: PropTypes.string,
};

type FooterProps = PropTypes.InferProps<typeof propTypes>;

const Footer = ({ workTitle }: FooterProps): JSX.Element => (
  <div className={styles['container']}>
    <div className={styles['heading']}>{workTitle}</div>
  </div>
);

Footer.defaultProps = {
  workTitle: null,
};

Footer.propTypes = propTypes;

const mapStateToProps = (state: State) => ({
  workTitle: state?.work?.title,
});

export default connect(mapStateToProps, null)(Footer);
