import React from 'react';
import ReactDom from 'react-dom';


// function Greeting() {
//     return <h5> this is kavi and this is my first component </h5>;
// }


// const Greeting = () => {
//     return React.createElement('h1', {}, 'hello world')
// }



const Person = () => <h2> john doe </h2>;
const Message = () => {
    return <p> this is a message </p>
}
function Greeting() {
    return (
        <>
            <Person />
            <Message />
        </>
    )
}

ReactDom.render(<Greeting />, document.getElementById('root'));