import Appbar from "../modules/Appbar";
import Breadcrumbs from "../../components/elements/Breadcrumbs";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
  content: {
    margin: theme.spacing(2),
  },
}));

const BaseLayout = ({ children, routersBreadcrumbs }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Appbar />
      <div className={classes.content}>
        <Breadcrumbs routers={routersBreadcrumbs} />
        {children}
      </div>
    </div>
  );
};

export default BaseLayout;
