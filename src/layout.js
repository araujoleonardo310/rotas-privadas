import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const Layout = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("@isAutenticate");

    if (isAuth) {
      setIsAuth(true);
    }
  }, []);

  return (
    <>
      {isAuth && <Navbar />}
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
