//import React, { Component } from 'react';   --not needed for functional component
import React from 'react';
import {NavLink} from 'react-router-dom'

const Home = ( { books, deleteBook, editBook } ) => { //destructuring shortcut


    const bookList = books.length ? (

        books.map(book => {
            return(
                
                <div key={book.id}>
                <div className="col s4">
                <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{ book.title }</span>
                    <NavLink to={{pathname: '/ViewBook', state: {books:books, id:book.id} }}><button className="btn-small blue-grey lighten-1" >View</button></NavLink>
                    <button className="btn-small blue-grey lighten-1" >Edit</button>
                    <button className="btn-small deep-orange darken-3 right" onClick={()=>{deleteBook(book.id)}}>Delete</button> 
                </div>
                </div>
                </div>
                </div>        
            )
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


export default Home