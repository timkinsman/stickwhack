import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    container: {
        minHeight: "100vh"
      },
      largerTitle: {
        fontSize: "150px", 
        fontFamily: "swear-display-cilati", 
        fontWeight: "700", 
        opacity: "0.1", 
        position: "absolute", 
        top: "0", 
        left: "0"
      }
}));

export default useStyles;