import { Button, Grid } from "@material-ui/core";
import BaseLayout from "../components/layouts/BaseLayout.js.js";
import { makeStyles } from "@material-ui/core/styles";


import Link from "next/link";
// import Router from "next/router"

const Home = () => {
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
    </BaseLayout>
  );
};


const useStyles = makeStyles(() => ({
  root: {}
}));

export default (Home);
