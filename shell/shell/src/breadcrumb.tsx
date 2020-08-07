import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { withRouter } from "react-router-dom";

const SimpleBreadcrumbs = ({ history }) => {
  alert(JSON.stringify(history));
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography color="textPrimary">Home</Typography>
    </Breadcrumbs>
  );
};

export default withRouter(SimpleBreadcrumbs);
