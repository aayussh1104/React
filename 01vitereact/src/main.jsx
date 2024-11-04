import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'


// const reactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     children : 'Click me to visit google'
// }

// const anotherElement = (
//     <a href="https://www.google.com" target='_blank'>Visit Google</a>
// )

const reactElement = React.createElement(           // it creates element but it has special type of syntax to write it with
    'a',
    {href : 'https//www.google.com', target : '_blank'},
    'Click me to visit google'
)



createRoot(document.getElementById('root')).render(

    <App/>
)
