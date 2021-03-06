import React from 'react';
import PropTypes from 'prop-types';
import { stickerPropTypes } from '../../actions';
import styles from './Sticker.module.scss';

const propTypes = {
  sticker: stickerPropTypes.isRequired,
};

type StickerProps = PropTypes.InferProps<typeof propTypes>;

const Sticker = ({ sticker }: StickerProps): JSX.Element => (
  <img
    loading='lazy'
    className={styles['sticker']}
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
);

export default Sticker;
