import { Breadcrumbs as MuiBreadcrumbs } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "next/link";

// import styled from 'styled-components'

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover":{
      borderBottom: "1px solid"
    }
  },
  
}));



const Breadcrumbs = ({routers}) => {
  const classes = useStyles();
  return (
    <>
      <MuiBreadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {routers && routers.map((row,i) => {
          return (
              <Link href={row.path} key={i} className={classes.text} ><a className={classes.text}>{row.title}</a></Link>
          );
        })}
      </MuiBreadcrumbs>
    </>
  );
};

export default Breadcrumbs;
