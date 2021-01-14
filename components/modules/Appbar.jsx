import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../src/assets/svg/logo.svg";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";

const useStyles = makeStyles((theme) => ({
  root: {},
  grow: {
    flexGrow: 1,
  },
  logo: {
    height: "48px",
    marginRight: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: theme.palette.primary.main,
    fontWeight: "bold"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

const Appbar = () => {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className={classes.grow,classes.root}>
        <AppBar position="static" color="secondary" elevation={0}>
          <Toolbar>
            <Logo className={classes.logo} />
            <Typography className={classes.title} variant="h6" noWrap>
              Easyrice Mo
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button
                color="primary"
                className={classes.menuButton}
                size="large"
              >
                หน้าแรก
              </Button>
              <Button color="primary" size="large">
                ติดต่อเรา
              </Button>
              <Button color="primary" size="large" startIcon={<AccountCircleIcon />} endIcon={<KeyboardArrowDownIcon/>}>
                สวัสดีคุณ {user}
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Appbar;
