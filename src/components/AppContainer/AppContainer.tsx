import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

type AppContainerProps = PropTypes.InferProps<typeof propTypes>;

const AppContainer = ({ children }: AppContainerProps) => <div>{children}</div>;

export default AppContainer;
