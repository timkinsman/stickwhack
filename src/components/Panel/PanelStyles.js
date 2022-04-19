import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    container: {
      display: "grid", 
      gridTemplateColumns: "repeat(2, 1fr)", 
      position: "relative"
    },
    left: {
      minHeight: "calc(100vh - 100px)", 
      padding: "50px", 
      color: "white", 
      flexDirection: "column", 
      display: "flex"
    },
    logo: {
      width: "30%", 
      margin: "auto 0"
    },
    right: {
      position: "relative", 
      minHeight: "100vh", 
      overflow: "hidden"
    },
    buttonLeft: {
      position: "absolute", 
      left: "30px", 
      top: "50%", 
      zIndex: "99"
    },
    buttonRight: {
      position: "absolute", 
      right: "30px", 
      top: "50%", 
      zIndex: "99"
    },
    textContainer: {
      marginTop: "100px", 
      maxWidth: "700px"
    },
    title: {
      fontSize: "37px", 
      marginBottom: "30px"
    },
    description: {
      fontSize: "35px", 
      marginBottom: "60px"
    },
    carouselWrapper: {
      position: "absolute", 
      display: "grid", 
      transition: "left 2s", 
      minHeight: "100vh", 
      overflow: "hidden"
    },
    imageContainer: {
      height: "100%", 
      width: "100%", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      position: "relative"
    },
    image: {
      width: "100%", 
      position: "absolute", 
      top: "0", 
      left: "0", 
      height: "100%", 
      objectFit: "cover", 
      transition: "transform 1s",
      "&:hover": {
        transform: "scale(1.05)", 
        transition: "transform 1s"
      }

    }
  }));

export default useStyles;