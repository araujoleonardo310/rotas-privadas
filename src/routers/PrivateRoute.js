import React from "react";
import { Redirect } from "react-router-dom";

import PublicRoute from "../constants";

import PublicRoute from "./PublicRoute";

const PrivateRoute = (props) => {
  const { isAutenticated } = props;
  return (
    <>
      {/* Abaixo, verifico se está logado e se o path chamado é o de login usando includes(), se for eu mando as infos pra rota pública */}
      {isAutenticated && <PublicRoute {...props} />}

      {/* Se não estiver logado eu mando o usuário para login */}
      {!isAutenticated && <Redirect to={Routes.LOGIN} />}
    </>
  );
};

export default PrivateRoute;
