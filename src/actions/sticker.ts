import PropTypes from 'prop-types';

export const stickerPropTypes = PropTypes.shape({
  image: PropTypes.string.isRequired,
  top: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  width: PropTypes.string,
  rotate: PropTypes.number,
});

export interface Sticker {
  image: string;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  width?: string;
  rotate?: number;
}
