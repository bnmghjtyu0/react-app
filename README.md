- App.js
- AppProvider.js
- Home.js

```jsx
// App.js
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

```

```jsx
// AppProvider.js

import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: '', //初始化
            // ...this.savedSettings(), //立即函示 重新整理才會有
        };
    }

//    savedSettings (){
//        return {page:this.props.location.pathname}
//    }
    setPage = page => {
        this.setState({ page });
    };

    render() {
        return (
            <AppContext.Provider value={this.state} >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider
export const AppContext = React.createContext();
```

```jsx
// Home.js

import React, { useEffect } from "react";
import { AppContext } from "../AppProvider";
const Home = ({ history }) => {
    return (
        <AppContext.Consumer>
            {({ page, setPage }) => {
                return (
                    <div>
                        {`path ${history.location.pathname}`}
                        {page}
                    </div>
                )
            }}
        </AppContext.Consumer>
    )
};
export default Home;
```