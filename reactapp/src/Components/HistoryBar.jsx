import React from 'react'

export default function HistoryBar(props) {
    return (
        <ul>
            {props.locations.map(location => <li className="nav-item" key={location}><a href="">{location}</a></li>)}
        </ul>
    )
}
