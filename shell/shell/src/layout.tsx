import * as React from "react";
import { ComponentsState } from "piral";
import SimpleBreadcrumbs from "./breadcrumb";
import SamplePage from "./samplePpage";

export const layout: Partial<ComponentsState> = {
  Layout: ({ children }) => (
    <div>
      <SimpleBreadcrumbs />
      <SamplePage />
      <div className="container">{children}</div>
    </div>
  ),
};
