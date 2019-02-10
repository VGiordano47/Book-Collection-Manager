//import React, { Component } from 'react';   --not needed for functional component
import React from 'react';

//class Home extends Component{   --not needed for functional (not stateless) component
const Home = ( { books, deleteBook, editBook } ) => { //destructuring shortcut
    //render(){ --not needed
    //const { books } = this.props;

    const bookList = books.length ? (

        books.map(book => {
            return(
                
                <div key={book.id}>
                <div class="col s4">
                <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">{ book.title }</span>
                    <button class="btn-small blue-grey lighten-1" >View</button>
                    <button class="btn-small blue-grey lighten-1" >Edit</button>
                    <button class="btn-small deep-orange darken-3 right" onClick={()=>{deleteBook(book.id)}}>Delete</button> 
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