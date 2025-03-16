import React, { useContext } from 'react';
import { ThemeContext, UserContext } from '../App';

function ChildC() {
    const user = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext)
    function toggleTheme(){
        if(theme==='light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }

    }
    return (
        <div>
            <button onClick={toggleTheme}>
                Change Theme
            </button>
            <h1>
                {user.name}
            </h1>
        </div>
    )
}

export default ChildC
