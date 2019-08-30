import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./home/";
import About from "./about/";
function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
