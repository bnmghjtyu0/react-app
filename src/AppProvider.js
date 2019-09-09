import React, { Component } from 'react'

class AppProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: '213'
        }
    }
    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider
export const AppContext = React.createContext();