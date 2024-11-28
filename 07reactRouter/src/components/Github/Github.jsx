import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data,setData]= useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/aayussh1104')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
    return (
        <div className='bg-gray-600 text-center m-4 text-white'>
            Github followers : {data.followers}
            <img src = {data.avatar_url} alt="Github picture" width={300}/>
        
        </div>
    )
}

export default Github


export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/aayussh1104');
    return response.json();
}