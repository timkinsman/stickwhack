import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sticker } from '../Sticker';
import { stickerPropTypes, workPropsTypes } from '../../actions';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrowRight.svg';
import useStyles from './PanelStyles';

const propTypes = {
  sticker: stickerPropTypes,
  work: workPropsTypes.isRequired,
};

type PanelProps = PropTypes.InferProps<typeof propTypes>;

const Panel = ({ work, sticker }: PanelProps): JSX.Element => {
  const classes = useStyles()
  const [pagination, setPagination] = useState(0);

  const handleOnClick = (next: number) =>
    next < 0
      ? setPagination(work.carouselImages.length - 1)
      : setPagination(next % work.carouselImages.length);

  return (
    <div className={classes.container}>
      <div
        className={classes.left}
        style={{ background: work.theme.primary, color: work.theme.color }}
      >
        <Link to={`/work/${work.id}`} style={{ marginTop: 'auto' }}>
          <img src={work.logo} alt='logo' className={classes.logo} />
        </Link>
        <div className={classes.textContainer}>
          <div className={classes.title}>{work.category}</div>
          <div className={classes.description}>{work.shortDescription}</div>
        </div>
      </div>

      <div className={classes.right} style={{ background: work.theme.secondary }}>
        {work.carouselImages.length > 1 && (
          <>
            <button
              type='button'
              className={classes.buttonLeft}
              onClick={() => handleOnClick(pagination - 1)}
            >
              <ArrowLeft />
            </button>
            <button
              type='button'
              className={classes.buttonRight}
              onClick={() => handleOnClick(pagination + 1)}
            >
              <ArrowRight />
            </button>
          </>
        )}

        <div
          className={classes.carouselWrapper}
          style={{
            gridTemplateColumns: `repeat(${work.carouselImages.length}, 1fr)`,
            width: `${work.carouselImages.length * 100}%`,
            left: `${pagination * -100}%`,
          }}
        >
          {work.carouselImages.map((image) => (
            <div key={image} className={classes.imageContainer}>
              <img className={classes.image} alt='carousel' src={image} />
            </div>
          ))}
        </div>
      </div>
      {sticker && <Sticker sticker={sticker} />}
    </div>
  );
};

Panel.defaultProps = {
  sticker: null,
};

Panel.propTypes = propTypes;

export default Panel;
