import React from "react";
import {AppContext} from '../AppProvider'
const About = () => {
    return (
        <AppContext.Consumer>
            {({ page }) => {
                return page
            }}
        </AppContext.Consumer>

    )
};
export default About;
