import React from 'react'

const List = ({url, name}) => {
    return (
        <>
        <li>
        <a href={url}>
        <p>{name}</p>
        </a>
        </li>
        </>
    )
}

export default List