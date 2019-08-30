import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { fakeAuth } from "../fakeAuth";
const Login = ({location}) => {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const login = () => {
    fakeAuth.authenticate(() => {
        setRedirectToReferrer(true)
    });
  };

  let { from } = location.state || { from: { pathname: "/" } };

  if (redirectToReferrer) return <Redirect to={from} />;

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
};
export default Login;
