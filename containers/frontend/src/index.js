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


function Booklist() {
    return (
        <section>
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
const Author = () => <h5> Sample Author </h5>

ReactDom.render(<Booklist />, document.getElementById('root'));