import React, { useEffect } from "react";
import { withRouter } from 'react-router-dom'
import Child from './child'
const Home = (props) => {

    return (
        <div><Child /></div>
    )
}
export default withRouter(Home);
