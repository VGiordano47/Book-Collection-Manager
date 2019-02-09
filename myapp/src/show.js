//import React, { Component } from 'react';   --not needed for functional component
import React from 'react';

//class Show extends Component{   --not needed for functional (not stateless) component
const Show = ( { books } ) => { //destructuring shortcut
    //render(){ --not needed
    //const { books } = this.props;
    //const { books } = props;
    const bookList = books.map(book => {
        return(
            <div className="book" key={book.id}>
                <div>Title: { book.title }</div>
                <div>ISBN: { book.isbn } </div>
                <div>Author: { book.author } </div>
            </div>        
        )
    })

    return(
        <div className="book-list">
            { bookList }
        </div>
    )
}


export default Show