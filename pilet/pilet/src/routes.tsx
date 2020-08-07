import * as React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { PageOne } from "./page1";
import { PageTwo } from "./page2";
import { PageThree } from "./page3";
import { PageFour } from "./page4";
import { PageFive } from "./page5";
/**
 * Creating dynamic routing from menus
 */
export const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/sample/page1"} component={PageOne} />
      <Route exact path={"/sample/page3"} component={PageThree} />
      <Route exact path={"/sample/page4"} component={PageFour} />
      <Route exact path={"/sample/page2"} component={PageTwo} />
      <Route exact path={"/sample/page5"} component={PageFive} />
    </Switch>
  );
};

export default withRouter(Routes);
