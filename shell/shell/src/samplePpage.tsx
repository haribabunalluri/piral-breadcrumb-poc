import * as React from "react";
import { withRouter } from "react-router-dom";

const SamplePage = ({ history }) => {
  const onNavigate = () => {
    window.location.href = `/sample/page1`;
  };
  return <button onClick={onNavigate}>Navigate to pilet</button>;
};

export default withRouter(SamplePage);
