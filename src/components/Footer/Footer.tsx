import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../reducers';
import useStyles from './FooterStyles';

const propTypes = {
  workTitle: PropTypes.string,
};

type FooterProps = PropTypes.InferProps<typeof propTypes>;

const Footer = ({ workTitle }: FooterProps): JSX.Element => {
  const classes = useStyles()
  return(
  <div className={classes.container}>
    <div className={classes.heading}>{workTitle}</div>
  </div>
)};

Footer.defaultProps = {
  workTitle: null,
};

Footer.propTypes = propTypes;

const mapStateToProps = (state: StoreState) => ({
  workTitle: state?.work?.title,
});

export default connect(mapStateToProps, null)(Footer);
