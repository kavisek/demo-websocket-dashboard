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
        img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        title: 'Sample Book',
        author: "Sample Author",
    },
    {
        img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        title: 'Sample Book',
        author: "Sample Author",
    },
];

const names = ['John', 'peter', 'susan'];
const newName = names.map((name) => { console.log(name) });
console.log(newName);


function Booklist() {
    return (
        <section className='booklist'>
            {names}
        </section>
    );
}


const Book = (props) => {
    const { img, title, author } = props;
    console.log(props)
    return (
        <article>
            < img src={props.img} />
            <h1>{props.title}</h1>
            <h4>{props.author.toUpperCase()}</h4>
        </article >
    );
}

ReactDom.render(<Booklist />, document.getElementById('root'));