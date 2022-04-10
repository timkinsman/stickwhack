import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import $ from 'jquery';
import { NotFound } from '../NotFound';
import { setActiveWorkAction } from '../../actions/workAction';
import { works } from '../../context';
import styles from './Work.module.scss';
import { COLORS } from '../../Theme';

const propTypes = {
  setActiveWork: PropTypes.func.isRequired,
};

type WorkProps = PropTypes.InferProps<typeof propTypes>;

const Work = ({ setActiveWork }: WorkProps): JSX.Element => {
  const { id } = useParams();
  const activeWork = works.find((work) => work.id === Number(id));

  useEffect(() => {
    return () => {
      setActiveWork(null);
      $('body').css({ background: COLORS.majimaSand, color: COLORS.majimaBlue });
    };
  }, [setActiveWork]);

  if (!activeWork) {
    return <NotFound />;
  }

  setActiveWork(activeWork);
  $('body').css({ background: activeWork?.theme?.primary });

  return (
    <div
      className={`${styles['container']} global-fadein`}
      style={{ color: activeWork?.theme?.color, paddingTop: '100px' }}
    >
      <div className={styles['larger-title']}>{activeWork?.title}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ padding: '0 50px' }}>
          <img
            alt='logo'
            src={activeWork?.logo}
            style={{ marginBottom: '63px', maxWidth: '220px' }}
          />
          <div style={{ fontSize: '80px', marginBottom: '30px' }}>{activeWork?.title}</div>
          <div style={{ fontSize: '37px', marginBottom: '92px' }}>{activeWork?.category}</div>
          <div>
            {activeWork?.longDescription.map((segment) => (
              <div style={{ fontSize: '35px', marginBottom: '52px' }}>{segment}</div>
            ))}
          </div>
        </div>
        <img alt='feature' src={activeWork?.feature} style={{ width: '100%' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {activeWork?.subFeatures.map((subFeature) => (
          <img
            alt='sub feature'
            src={subFeature}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ))}
      </div>
    </div>
  );
};

Work.propTypes = propTypes;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      setActiveWork: setActiveWorkAction,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(Work);
