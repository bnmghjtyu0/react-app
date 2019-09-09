```jsx
// App.js

import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./home/";
import About from "./about/";
import AppProvider from './AppProvider'

function App() {
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

export default App;
```

```jsx
// AppProvider.js

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class AppProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: '213',
            increment: this.increment,
            count: 0,
            unsplashDatas: [],
            ...this.saveFn(),
            handleChange: this.handleChange,
            city: ''

        }
    }
    componentDidMount() {
        this.fetchUnsplash()
    }
    async fetchUnsplash() {
        const url = 'https://api.unsplash.com/search/photos?client_id=4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964&query=Mountains'
        fetch(url).then(res => res.json()).then(json => {
            this.setState({
                unsplashDatas: json.results
            })
        })
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    saveFn() {
        const params = new URLSearchParams(this.props.history.location.search)
        console.log(params)
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default withRouter(AppProvider)
export const AppContext = React.createContext();
```

```jsx
// Home.js

import React from "react";
import { AppContext } from '../AppProvider'
const Home = ({ history }) => {
    return (
        <AppContext.Consumer>
            {({ page, increment, count, unsplashDatas, handleChange, city }) => {
                return (
                    <div>
                        <h2>{page}</h2>
                        <p>{history.location.pathname}</p>
                        <label>美麗的城市 </label>
                        <input name="city" value={city} onChange={handleChange} />
                        {city}
                        <br />
                        {count}
                        <button onClick={increment}>+</button>
                        <table>
                            <thead>
                                <tr>
                                    <th>作者</th>
                                    <th>圖片(另開新頁)</th>
                                </tr>
                            </thead>
                            <tbody>

                                {unsplashDatas && unsplashDatas.map((v, i) => {
                                    return (
                                        <tr>
                                            <td>{v.user.name}</td>
                                            <td>
                                                <a href={v.urls.full} target="_blank">連結</a>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>

                    </div>
                )
            }}
        </AppContext.Consumer>
    )
}
    ;
export default Home;
```