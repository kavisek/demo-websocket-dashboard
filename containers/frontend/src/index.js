import React from 'react';
import ReactDom from 'react-dom';


// function Greeting() {
//     return <h5> this is kavi and this is my first component </h5>;
// }


// const Greeting = () => {
//     return React.createElement('h1', {}, 'hello world')
// }



// const Person = () => <h2> john doe </h2>;
// const Message = () => {
//     return <p> this is a message </p>
// }
// function Greeting() {
//     return (
//         <>
//             <Person />
//             <Message />
//         </>
//     )
// }


// CSV
import './index.css'

function Booklist() {
    return (
        <section className='booklist'>
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

const Book = () => {
    return (
        <article>
            <Image></Image>
            <Title />
            <Author />
        </article >
    );
}

const Image = () => < img src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
const Title = () => <h1> Sample Book </h1>
const Author = () => <h4 style={{color:'#617d98', fonSize: '0.75rem', marginTop: '0.25rem'}} > Sample Author </h4>

ReactDom.render(<Booklist />, document.getElementById('root'));