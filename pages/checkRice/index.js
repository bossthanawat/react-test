import { Button, Grid } from "@material-ui/core";
import BaseLayout from "../../components/layouts/BaseLayout.js.js";
import { makeStyles } from "@material-ui/core/styles";
import ScanRiceForm from "../../components/modules/form/ScanRiceForm"

import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import Link from "next/link";
// import Router from "next/router"

const ScanRice = () => {
  return (
    <BaseLayout
      routersBreadcrumbs={[
        {
          path: "/",
          title: "หน้าแรก",
        },
        {
          path: "/checkRice",
          title: "ตรวจข้าว",
        },
      ]}
    >
      <h1 style={{textAlign:"center"}}>ตรวจข้าว</h1>
      <Grid container>
        <Grid item xs={6} container alignItems="center" justify="center">
          <ContentLeft/>
        </Grid>
        <Grid item xs={6} >
          <ContentSelect/>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

const ContentSelect = () => {
  return (<ScanRiceForm/>)
}

const ContentLeft = () => {
  return (<><InsertEmoticonIcon style={{ fontSize: "12em" }} /></>)
}

const useStyles = makeStyles(() => ({
  root: {},
}));

export default ScanRice;
