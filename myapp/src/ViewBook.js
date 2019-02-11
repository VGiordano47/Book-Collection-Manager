//import React, { Component } from 'react'; 
import React from 'react';
import {NavLink} from 'react-router-dom'

const ViewBook = ({books, id, deleteBook}) => {
 
    console.log(id); //cannot figure out how to pass ID from /Home

    const bookList = books.length ? (

        books.map(book => {

            return book.id === 1 ? (
                
                <div key={book.id}>
                <div class="col s6">
                <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">{ book.title }</span>
                    <p>Author: {book.author}</p><br/>
                    <NavLink to={{pathname: '/ViewBook', state: {books:books} }}><button class="btn-small blue-grey lighten-1" >View</button></NavLink>
                    <button class="btn-small blue-grey lighten-1" >Edit</button>
                    <button class="btn-small deep-orange darken-3 right" onClick={()=>{deleteBook(book.id)}}>Delete</button> 
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