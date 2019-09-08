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
