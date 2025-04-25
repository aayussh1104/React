import React, { useCallback, useEffect, useState } from 'react';

const ExpensiveComponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const prevFunction= useRef(null);

    const expensiveCalculation = useCallback(()=>{
        console.log("Running expensive calculations");
        let result =0;
        for(let i =0; i<100000 ; i++){
            result +=i;
        }
        return result;
    }, [count]);

    useEffect(()=>{
        if(prevFunction.current){
            if(prevFunction.current === expensiveCalculation){
                console.log("function not re-created");
            }
            else{
                console.log("function got re-created")
            }

        }else{
            prevFunction.current = expensiveCalculation;
        }
    },[])
    
    return (
        <>
            <input 
            type="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder='Type something'
            />

            <p>Expensive Calculation result : {expensiveCaculation()}</p>
            <button onClick={()=> setCount(count+1)}> Increment </button>

        </>
    )
}

export default ExpensiveComponent
