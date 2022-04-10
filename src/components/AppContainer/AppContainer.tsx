import PropTypes from 'prop-types';
import React from 'react';
import styles from './AppContainer.module.scss';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

type AppContainerProps = PropTypes.InferProps<typeof propTypes>;

const AppContainer = ({ children }: AppContainerProps) => (
  <div className={styles['container']}>{children}</div>
);

export default AppContainer;
