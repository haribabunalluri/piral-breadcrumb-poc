import * as React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes } from "./routes";

import { List, ListItem, ListItemText } from "@material-ui/core";
/**
 * Application rendering start with redux store provider.
 */
function App() {
  /**
   * Styles reference instance
   */

  return (
    <Router>
      <List>
        <ListItem
          button
          divider
          disableGutters
          component={Link}
          to={"/sample/page1"}
        >
          <ListItemText
            primary={"Page1"}
            secondary={"Test Page"}
          ></ListItemText>
        </ListItem>
        <ListItem
          button
          divider
          disableGutters
          component={Link}
          to={"/sample/page2"}
        >
          <ListItemText
            primary={"Page2"}
            secondary={"Test Page"}
          ></ListItemText>
        </ListItem>
        <ListItem
          button
          divider
          disableGutters
          component={Link}
          to={"/sample/page3"}
        >
          <ListItemText
            primary={"Page3"}
            secondary={"Test Page"}
          ></ListItemText>
        </ListItem>
        <ListItem
          button
          divider
          disableGutters
          component={Link}
          to={"/sample/page4"}
        >
          <ListItemText
            primary={"Page4"}
            secondary={"Test Page"}
          ></ListItemText>
        </ListItem>
        <ListItem
          button
          divider
          disableGutters
          component={Link}
          to={"/sample/page5"}
        >
          <ListItemText
            primary={"Page5"}
            secondary={"Test Page"}
          ></ListItemText>
        </ListItem>
      </List>
      <div>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
