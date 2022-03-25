import { useParams } from 'react-router';
import { showCases } from '../context';
import { NotFound } from './NotFound';
import styles from '../styles/ShowCase.module.scss';
import { setActiveWorkAction } from '../actions/workAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import $ from 'jquery';

interface ShowCaseProps {
  setActiveWork?: Function;
}

export const _ShowCase = ({ setActiveWork }: ShowCaseProps): JSX.Element => {
  const { id } = useParams();
  const showCase = showCases.find((showCase) => showCase.id === Number(id));

  if (!showCase) {
    return <NotFound />;
  }

  if (setActiveWork) setActiveWork(showCase.title);
  $('body').css({ background: showCase.left });

  return (
    <div className={`${styles['container']} global-fadein`}>
      {/* <div className={styles['work-grid']}>
        <div className={styles['work-content-grid']}>
          <div className={styles['work-headings']}>
            <h2 style={{ fontSize: '4em' }}>{work.heading}</h2>
            <h2 style={{ fontSize: '3em' }}>{work.subheading}</h2>
          </div>
          <div>
            <h2 style={{ fontWeight: 'lighter' }}>{work.brief}</h2>
          </div>
        </div>
        <div className={styles['work-img-grid']}>
          {work?.images?.map((image) => (
            <img
              loading='lazy'
              src={image}
              alt='left'
              style={{ width: '50%' }}
              className={styles['work-img']}
            />
          ))}
        </div>
      </div> */}
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

export const ShowCase = connect(null, mapDispatchToProps)(_ShowCase);
