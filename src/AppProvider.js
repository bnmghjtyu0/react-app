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