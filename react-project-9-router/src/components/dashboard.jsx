import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Outlet/>            
        </div>
    )
}

export default Dashboard


// <Outlet/> tag is used to render children elements from the parent elements and it should always be written in the parent component in the end to render the children elements
