import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Appbar from "../components/modules/Appbar";
import LoginForm from "../components/modules/form/LoginForm"


const Login = () => {
  const classes = useStyles();
  
  return (
    <>
      <Appbar />
      <Container maxWidth="xl" className={classes.root}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justify="center"
          className="content-center content-full"
        >
          <Grid item xs={6} container alignItems="center" justify="center">
            <Grid item className={classes.textLogo}>
              <ul style={{ listStyleType: "none" }}>
                <li>Easyrice</li>
                <li>MO</li>
              </ul>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.loginForm}>
              <LoginForm/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fleDirection: "column",
    height: "calc(100vh - 64px)",
    fallbacks: [
      { height: "-moz-calc(100vh - 64px)" },
      { height: "-webkit-calc(100vh  - 64px)" },
      { height: "-o-calc(100vh  - 64px)" },
    ],
    // border: "3px solid green",
  },
  textLogo: {
    display: "inline-block",
    fontSize: "100px",
    fontWeight: "bold",
  },
  loginForm: {
    width: "700px",
    height: "500px",
    background: theme.palette.secondary.main,
    padding: "0.5rem 5rem",
  },
}));

export default Login;
