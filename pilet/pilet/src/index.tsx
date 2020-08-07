import { PiletApi } from "breadcrumbs-shell";
import * as React from "react";
import App from "./app";

export function setup(app: PiletApi) {
  app.registerPage("/sample/**", () => <App></App>);
}
