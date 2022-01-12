import React, { useEffect, useState } from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import { Home, About, Contact, Login } from "./pages";
import { ROUTES } from "./constants";
import PublicRoute from "./routers/PublicRoute";
import PrivateRoute from "./routers/PrivateRoute";

const Router = () => {
  const [isAutenticating, setAutenticating] = useState(true);
  const [childProps, setChildProps] = useState({ isAutenticating: false });

  useEffect(() => {
    const isAuth = localStorage.getItem("@isAutenticate");
    if (isAuth === "logado") {
      setChildProps({ isAutenticating: true });
    }
    setAutenticating(false);
  }, []);

  return (
    <>
      {!isAutenticating && (
        <BrowserRouter>
          <Switch>
            <Layout>
              <PublicRoute
                {...childProps}
                path={ROUTES.LOGIN}
                component={Login}
                exact
              />

              <PublicRoute
                {...childProps}
                path={ROUTES.HOME}
                component={Home}
                exact
              />

              <PrivateRoute
                {...childProps}
                path={ROUTES.ABOUT}
                component={About}
                exact
              />

              <PrivateRoute
                {...childProps}
                path={ROUTES.CONTACT}
                component={Contact}
                exact
              />
            </Layout>
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
};

export default Router;
