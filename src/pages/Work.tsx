import { useParams } from 'react-router';
import { works } from '../context';
import { NotFound } from './NotFound';
import styles from '../styles/Work.module.scss';
import { setActiveWorkAction } from '../actions/workAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import $ from 'jquery';

interface WorkProps {
  setActiveWork?: Function;
}

export const _Work = ({ setActiveWork }: WorkProps): JSX.Element => {
  const { id } = useParams();
  const work = works.find((work) => work.id === Number(id));

  useEffect(() => {
    return () => {
      setActiveWork && setActiveWork(null);
      $('body').css({ background: '#fae5c2', color: '#2a0fff' });
    };
  }, []);

  if (!work) {
    return <NotFound />;
  }

  if (setActiveWork) setActiveWork(work);
  $('body').css({ background: work?.theme?.primary });

  return (
    <div
      className={`${styles['container']} global-fadein`}
      style={{ color: work?.theme?.color, paddingTop: '100px' }}
    >
      <div className={styles['larger-title']}>{work?.title}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ padding: '0 50px' }}>
          <img src={work?.logo} style={{ marginBottom: '63px' }} />
          <div style={{ fontSize: '80px', marginBottom: '30px' }}>{work?.title}</div>
          <div style={{ fontSize: '37px', marginBottom: '92px' }}>{work?.category}</div>
          <div>
            {work?.longDescription.map((segment) => (
              <div style={{ fontSize: '35px', marginBottom: '52px' }}>{segment}</div>
            ))}
          </div>
        </div>
        <img src={work?.feature} style={{ width: '100%' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {work?.subFeatures.map((subFeature) => (
          <img src={subFeature} style={{ width: '100%' }} />
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      setActiveWork: setActiveWorkAction,
    },
    dispatch,
  );

export const Work = connect(null, mapDispatchToProps)(_Work);
