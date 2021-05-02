import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(1, 10, 10),
        width: "230px",
      },
  }));
  export default function SignIn() {
    const classes = useStyles();
    return(
        <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
        </Button>
    );
  }