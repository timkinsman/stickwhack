import PropTypes from 'prop-types';

export const workPropsTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  logo: PropTypes.string.isRequired,
  feature: PropTypes.string.isRequired,
  subFeatures: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  carouselImages: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  longDescription: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
});

export const stickerPropTypes = PropTypes.shape({
  image: PropTypes.string.isRequired,
  top: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  width: PropTypes.string,
  rotate: PropTypes.number,
});
