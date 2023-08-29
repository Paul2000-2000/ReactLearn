import React from 'react'

const Book = (props) => {

    const {img , title , author } = props.book;
     
  const clickHandler = (e) => {
     console.log(e);
     console.log(e.target);
     alert('daa');
  }

     const complexExample = (author) =>{
        console.log(author);
     }
 

  return  ( 

//onHover like onClick ????????

  <article className='book' onMouseOver={()=>{
     console.log(author);
  }} >
     <img src={img} alt=''></img>
     <h1 onClick={ () => console.log(title)}> {title} </h1>
     <h2> {author}</h2>
     <button type='button' onClick={clickHandler} >But</button>
     <button type='button' onClick={() => complexExample(author)}>more compex example</button>
  </article>);
};

export default Book
