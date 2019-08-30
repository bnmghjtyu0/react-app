import React from 'react'

const Detail = ({match}) => {
    return (
        <div>
            <h4>{match.params.id}</h4>
        </div>
    )
}

export default Detail