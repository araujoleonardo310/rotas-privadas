import React from "react";
import { Route } from "react-router-dom";

import { deepMerge } from "../helpers";
import renderMergedProps from "./rederMergedProps";

const PublicRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return renderMergedProps(component, deepMerge(routeProps, rest)); // Usamos o deepMerge somente para mesclar os 2 objetos "routeProps, rest"
      }}
    />
  );
};

export default PublicRoute;
