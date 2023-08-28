import React from 'react';
import ReactDOM from 'react-dom';


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


function BookList() {
   return (
         <section>
            <Book></Book>
            <Book></Book>
            <Book></Book>
            <Book></Book>
            <Book></Book>
            <Book></Book>
            <Book></Book>
         </section>
   );
}

const Book = () => {
   return <article>
      <Image></Image>
      <Title></Title>
      <Author></Author>
   </article>
};

const Image = () => <img src='https://m.media-amazon.com/images/I/818K2QDCZvL._AC_UY218_.jpg' alt=''></img>

const Title = () => <h1> This is a title</h1>

const Author = () => <h2> This is an author</h2>

ReactDOM.render(<BookList/>,document.getElementById('root'));

//21 next