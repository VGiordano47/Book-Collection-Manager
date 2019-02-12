//import React, { Component } from 'react'; 
import React from 'react';
import {NavLink} from 'react-router-dom'

const ViewBook = ({books, id, deleteBook}) => {
    
    console.log(id); //cannot figure out how to pass ID from /Home
    
    const bookList = books.length ? (
    //const bookList = 
        books.map(book => {

            return book.id === 1 ? ( //temporary static id
                
                <div key={book.id}>
                <div className="col s6">
                <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{ book.title }</span>
                    <p>Author: {book.author}</p><br/>
                    <p>ISBN: {book.isbn}</p><br/>
                    <NavLink to={{pathname: '/ViewBook', state: {books:book} }}><button className="btn-small blue-grey lighten-1" >View</button></NavLink>
                    <button className="btn-small blue-grey lighten-1" >Edit</button>
                    <button className="btn-small deep-orange darken-3 right" onClick={()=>{deleteBook(book.id)}}>Delete</button> 
                </div>
                </div>
                </div>
                </div>        
            ) : null
        }) 
    ) : (
       <p className="center"> You have no books. </p>
    )


    // () => onClick prevents from firing on load (not needed if not passing parameter directly)
    return(
        <div className="book-list">
            { bookList }
        </div>
    )
}


export default ViewBook