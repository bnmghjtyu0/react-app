import React from "react";
import { AppContext } from '../AppProvider'
const Home = () => {
    return (
        <AppContext.Consumer>
            {({ page }) => {
                return page
            }}
        </AppContext.Consumer>
    )
}
    ;
export default Home;
