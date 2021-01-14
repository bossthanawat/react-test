import { Button, Grid } from "@material-ui/core";
import BaseLayout from "../components/layouts/BaseLayout.js.js";
import { makeStyles } from "@material-ui/core/styles";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import withPrivateRoute from "../components/withPrivateRoute";

import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

import Link from "next/link";
// import Router from "next/router"

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <BaseLayout
      routersBreadcrumbs={[
        {
          path: "/",
          title: "หน้าแรก",
        }
      ]}
    >
      <Grid container spacing={3} className="content-center content-full">
        <Grid item xs={6} container alignItems="center" justify="center">
          <Grid item>
            <InsertEmoticonIcon style={{ fontSize: "12em" }} />
            <h1>สวัสดีคุณ {user}</h1>
            <h2>วันนี้คุณต้องการจะทำอะไร?</h2>
          </Grid>
        </Grid>
        <Grid item xs={6} container alignItems="center">
          <Menu />
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

const Menu = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.containerMenu}>
        <div className={classes.itemContainerMenu}>
          <Link href="checkRice">
            <Button
              style={{ height: "200px" }}
              startIcon={<SearchIcon style={{ fontSize: "8em" }} />}
              variant="contained"
              color="primary"
              fullWidth={true}
            >
              <h1>ตรวจข้าว</h1>
            </Button>
          </Link>
        </div>
        <div>
          <Button
            className={classes.itemContainerMenu}
            style={{ width: "310px", height: "100px" }}
            startIcon={<AccessTimeIcon style={{ fontSize: "3em" }} />}
            variant="contained"
            color="primary"
            fullWidth={true}
          >
            <h1>ประวัติข้าว</h1>
          </Button>
          <Button
            className={classes.itemContainerMenu}
            style={{ width: "310px", height: "100px" }}
            startIcon={<SettingsIcon style={{ fontSize: "3em" }} />}
            variant="contained"
            color="primary"
            fullWidth={true}
          >
            <h1>ตั้งค่า</h1>
          </Button>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles(() => ({
  root: {},
  containerMenu: {
    width: "700px",
  },
  itemContainerMenu: {
    margin: "20px",
  },
}));

export default withPrivateRoute(Home);
