import React from 'react';
import ReactDom from 'react-dom';


// function Greeting() {
//     return <h5> this is kavi and this is my first component </h5>;
// }


const Greeting = () => {
    return React.createElement('h1', {}, 'hello world')
}

ReactDom.render(<Greeting />, document.getElementById('root'));