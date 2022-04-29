import React from 'react';
import ReactDom from 'react-dom';


// function Greeting() {
//     return <h5> this is kavi and this is my first component </h5>;
// }


// const Greeting = () => {
//     return React.createElement('h1', {}, 'hello world')
// }


function Greeting() {
    return (
        <React.Fragment>
            <div>
                <h3>hello people</h3>
                <ul>
                    <li>
                        <a href='#'>hello world</a>
                    </li>
                    </ul>
            </div>
        </React.Fragment>
    )
}

ReactDom.render(<Greeting />, document.getElementById('root'));