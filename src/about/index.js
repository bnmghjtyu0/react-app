import React from "react";
import { AppContext } from '../AppProvider'
const About = ({ history }) => {
    return (
        <AppContext.Consumer>
            {({ page }) => {
                return (
                    <div>
                        <p>{history.location.pathname}</p>
                    </div>

                )
            }}
        </AppContext.Consumer>

    )
};
export default About;
