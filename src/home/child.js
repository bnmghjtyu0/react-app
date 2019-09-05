import React, { useEffect } from "react";
import { withRouter } from 'react-router-dom'
function setParams({ id }) {
    const searchParams = new URLSearchParams()
    id !== undefined && searchParams.set('id', id || '')

    return searchParams.toString()
}

const Child = (props) => {
    useEffect(() => {
        console.log(props.location.search)
        const searchParams = new URLSearchParams(props.location.search)
        props.history.push(
            {
                pathname: '/',
                search: '?id=1'
            }
        )
        console.log(props.location)
    }, [props.location.search])
    return (
        <div>{props.location.pathname}</div>
    )
}
export default withRouter(Child);
