import React from 'react';
import ReactDOM from 'react-dom';
//import createRoot from 'react-dom';

import './index.css';

import { books } from './books';
import Book from './Book';





/* const Greetingv2 = () => {

    return ( 
           <>
            <div className=''>
      <Person></Person>
      <Da></Da>
      <h1>merge</h1>
      <img src='' alt=''/>
      <input type='text' name='da' id='inp1' placeholder='mergeee'/>
            </div>

        <h3>
          alt div blana 
        </h3>
            </> 
    );
 }
 
 const Person = () => {
  return (<div> <h4>This is john and this is my first component</h4> 
                <h2>oare</h2>
                </div> );}

  const Da = () => {
     return (
        <p>Da ma da</p>
     );
  }

/*
 function Greeting() {
       return  <h4>This is john and this is my first component</h4>;    
}

const Greetingv3 = () => {
  return   React.createElement('h1' , {} , 'hello world')
}
*/
/*function ParcBook(){
    booksDim.forEach(Book) => {
       return (
         props.
       );
    }
}*/

/*function BookList2() {


   return (
         <section className='booklist'>
           {books.map((book, index) => {
            return  (
                  <Book key={book.id} {...book}></Book>
            );
           })}
         </section>
   );
}*/


function BookList() {


   return (
         <section className='booklist'>
           {books.map((book, index) => {
            return  (
                  <Book key={book.id} book={book}></Book>
            );
           })}
         </section>
   );
}



const Image = () => {

}


const Title = () => {

}

const Author = () => {

}

ReactDOM.render(<BookList/>,document.getElementById('root'));

//createRoot.render(<BookList/>,document.getElementById('root'));


