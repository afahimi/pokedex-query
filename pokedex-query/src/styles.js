import { CardMedia } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useThemeProps } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#f00000",
  },
  icon: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    transform: "rotate(180deg)",
  },
  container: {
    marginTop: theme.spacing(4),
  },
  main: {},
  title: {
    fontSize: "3rem",
    fontFamily: '"Helvetica Neue", sans-serif',
    paddingTop: theme.spacing(3),
  },
  button: {
    backgroundColor: "#f00000",
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
  },
}));

export default useStyles;
