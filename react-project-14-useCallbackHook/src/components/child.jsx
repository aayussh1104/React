import React from 'react';

const Child = React.memo(
    (props) => {
        console.log("Child component got re - rendered")
        return (
            <>
            <button onClick = {props.handleClick}>
                {props.buttonName}
            </button>
            
            </>
        )
    }
);

export default Child
// React.memo -> wrap -> component -> component re-render tb hii hoga jb props ka name change hoga warna re-render nahi hoga

// If you are sending a function then React.memo wont be able to save you from re-rendering
