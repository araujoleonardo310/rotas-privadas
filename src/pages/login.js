import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { ROUTES } from "../constants";
import { flowService } from "../helpers/flow";

export const Login = () => {
  const [isAuth, setIsAuth] = useState(false);

  const [{ username, password }] = useState({
    username: "teste",
    password: "pass",
  });

  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("@isAutenticate");

    if (isAuth) {
      setIsAuth(true);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username !== formState.username || password !== formState.password) {
      setHasError(true);
      return;
    }
    localStorage.setItem("@isAutenticate", "logado");
    flowService.goTo(ROUTES.HOME);
  };

  return (
    <>
      {isAuth ? (
        <Redirect to={ROUTES.HOME} />
      ) : (
        <>
          <input
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />

          <button onClick={handleSubmit}>Login</button>
          {hasError && <p>Login or pass invalid</p>}
        </>
      )}
    </>
  );
};
