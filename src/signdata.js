import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%', 
      marginTop: theme.spacing(0.5),
    },
  }));
  export default function SignData() {
    const classes = useStyles();
    return(
        <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />
            <br/>
            <TextField
              variant="outlined"
              margin="normal"
              required
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <br/>
            <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
            </Grid>
        </form>
    );
  }