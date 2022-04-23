import { makeStyles } from '@material-ui/styles';
import { COLORS } from '../../Theme';

const useStyles = makeStyles(() => ({
  container: {
    height: 'calc(100vh - 100px)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '1500px',
    margin: '0 auto',
  },
  outerContainer: {
    padding: '50px',
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
  },
  button: {
    textAlign: 'left',
    '&:hover': {
      color: COLORS.MAJIMA_ORANGE,
    },
  },
  smile: {
    height: '142px',
    animationName: 'spin',
    animationDuration: '5000ms',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  headingContainer: {
    display: 'flex',
    gap: '12px',
    alignItems: 'baseline',
  },
  heading: {
    fontSize: '230px',
    fontFamily: 'swear-display-cilati',
    marginLeft: '-60px',
    paddingRight: '36px',
    fontWeight: '700',
  },
  subheading: {
    fontSize: '80px',
    fontFamily: 'Helvetica',
    fontWeight: '400',
    marginTop: '-30px',
    lineHeight: '90px',
  },
}));

export default useStyles;
