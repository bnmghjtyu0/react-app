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