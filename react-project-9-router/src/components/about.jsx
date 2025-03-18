import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();
    
    function handleClick(){
        navigate('/dashboard');
    }
    return (
        <div>
            <h1>About page</h1>
            <button onClick={handleClick}>MOVE TO DASHBOARD PAGE</button>
        </div>
    )
}

export default About
