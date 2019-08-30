import React from "react";
import "./App.css";
import { Route, Link, Redirect } from "react-router-dom";
import { fakeAuth } from "./fakeAuth";
import Public from "./public";
import Protected from "./Protected";
import Login from "./login";
import AuthButton from "./authButton";
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
function App() {
  return (
    <div className="App">
      <AuthButton />
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  );
}

export default App;
