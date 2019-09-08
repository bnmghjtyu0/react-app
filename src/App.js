import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./home/";
import About from "./about/";
import AppProvider from "./AppProvider";
import { withRouter } from 'react-router-dom'
function App(props) {
    return (
        <AppProvider>
            <div className="App">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </AppProvider>
    );
}

export default App
