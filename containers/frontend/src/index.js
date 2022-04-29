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

//Setup Vars
const books = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        title: 'Sample Book',
        author: "Sample Author",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        title: 'Sample Book',
        author: "Sample Author",
    },
];


function Booklist() {
    return (
        <section className='booklist'>
            {books.map((book, index) => {
                return <Book key={book.id}{...book}></Book>
            })}
        </section>
    );
}


const Book = (props) => {
    console.log(props)
    const { img, title, author } = props;
    
    return (
        <article>
            < img src={img} />
            <h1>{title}</h1>
            <h4>{author.toUpperCase()}</h4>
        </article >
    );
}

ReactDom.render(<Booklist />, document.getElementById('root'));