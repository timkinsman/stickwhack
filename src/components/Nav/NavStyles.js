import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  whyStickwhack: {
    position: 'fixed',
    top: '25px',
    right: '50px',
    zIndex: '99',
  },
  stickwhack: {
    position: 'fixed',
    bottom: '25px',
    left: '50px',
    zIndex: '99',
  },
  links: {
    position: 'fixed',
    bottom: '25px',
    right: '50px',
    zIndex: '99',
    display: 'flex',
    gap: '50px',
  },
}));

export default useStyles;
