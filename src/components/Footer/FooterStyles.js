import { makeStyles } from '@material-ui/styles';
import { COLORS } from '../../Theme';

const useStyles = makeStyles(() => ({
    container: {
        minHeight: "362px", 
        background: COLORS.MAJIMA_BLUE, 
        position: "relative"
      },
      heading: {
        color: COLORS.MAJIMA_SAND, 
        fontSize: "150px", 
        fontFamily: "swear-display-cilati", 
        fontWeight: "700"
      }
}));

export default useStyles;