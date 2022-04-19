import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    container: {
        display: "flex", 
        minHeight: "100vh", 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "column"
      }
}));

export default useStyles;