import React from "react";
import { AppContext } from "../AppProvider";
const About = ({history}) => {
    return (
        <AppContext.Consumer>
            {({ page }) => {
                return <div>

                  {`path ${history.location.pathname}`}
                {page}</div>
            }}
        </AppContext.Consumer>
    )
};
export default About;
