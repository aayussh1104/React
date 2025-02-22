import React from 'react'
import './UserCard.css'

const UserCard = (props)=> {
    return (
        <div className='UserContainer' style = {props.style}>
            <p id='title'>{props.name}</p>
            <img id='userImage' src={props.image} alt="aayush" />
            <p id='userDescription'>{props.description}</p>

        </div>
    )
}

export default UserCard
