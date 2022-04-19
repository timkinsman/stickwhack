import React from 'react';
import PropTypes from 'prop-types';
import { stickerPropTypes } from '../../actions';
import useStyles from './StickerStyles';

const propTypes = {
  sticker: stickerPropTypes.isRequired,
};

type StickerProps = PropTypes.InferProps<typeof propTypes>;

const Sticker = ({ sticker }: StickerProps): JSX.Element => {
  const classes = useStyles()  
  return(
  <img
    loading='lazy'
    className={classes.sticker}
    src={sticker.image}
    alt='sticker'
    style={{
      top: sticker?.top || undefined,
      right: sticker?.right || undefined,
      bottom: sticker?.bottom || undefined,
      left: sticker?.left || undefined,
      width: sticker?.width || '200px',
      transform: `rotate(${sticker?.rotate || 0}deg)`,
    }}
  />
)};

export default Sticker;
