import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const navigate = useNavigate();

    function handleClick(){
        navigate('/about');
    }
    return (
        <div>
            <h1>
                Home page
            </h1>
            <button onClick={handleClick}>
                MOVE TO ABOUT PAGE
            </button>
        </div>
        
    )
}

export default HomePage
