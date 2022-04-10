import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sticker } from './Sticker';
import { stickerPropTypes, workPropsTypes } from '../propTypes';
import { ReactComponent as ArrowLeft } from '../assets/icons/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../assets/icons/arrowRight.svg';
import styles from '../styles/Panel.module.scss';

const propTypes = {
  sticker: stickerPropTypes,
  work: workPropsTypes.isRequired,
};

type PanelProps = PropTypes.InferProps<typeof propTypes>;

export const Panel = ({ work, sticker }: PanelProps): JSX.Element => {
  const [pagination, setPagination] = useState(0);

  const handleOnClick = (next: number) =>
    next < 0
      ? setPagination(work.carouselImages.length - 1)
      : setPagination(next % work.carouselImages.length);

  return (
    <div className={styles['container']}>
      <div
        className={styles['left']}
        style={{ background: work.theme.primary, color: work.theme.color }}
      >
        <Link to={`/work/${work.id}`}>
          <img
            src={work.logo}
            alt='logo'
            className={styles['logo']}
            style={{ marginTop: work.id === 2 ? '-50px' : undefined }}
          />
        </Link>
        <div className={styles['text-container']}>
          <div className={styles['title']}>{work.category}</div>
          <div className={styles['description']}>{work.shortDescription}</div>
        </div>
      </div>

      <div className={styles['right']} style={{ background: work.theme.secondary }}>
        <button className={styles['button-left']} onClick={() => handleOnClick(pagination - 1)}>
          <ArrowLeft />
        </button>
        <button className={styles['button-right']} onClick={() => handleOnClick(pagination + 1)}>
          <ArrowRight />
        </button>

        <div
          className={styles['carousel-wrapper']}
          style={{
            gridTemplateColumns: `repeat(${work.carouselImages.length}, 1fr)`,
            width: `${work.carouselImages.length * 100}%`,
            left: `${pagination * -100}%`,
          }}
        >
          {work.carouselImages.map((thumb) => (
            <div className={styles['thumb-container']}>
              <img className={styles['image']} alt='work' src={thumb} />
            </div>
          ))}
        </div>
      </div>
      {sticker && <Sticker sticker={sticker} />}
    </div>
  );
};

Panel.propTypes = propTypes;
