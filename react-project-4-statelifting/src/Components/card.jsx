import React from 'react'

function Card(props) {
    return (
        <>
        <div>
            <input type="text" onChange={(e)=>{
                props.setName(e.target.value)
            }} />
            <p>Nmae state variable ki value inside {props.title} hai {props.name}</p>
        </div>
        </>
    )
}

export default Card
