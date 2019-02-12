import React, { Component } from 'react';
import NavBar from './NavBar'
import Home from './Home'
import AddBook from './AddBook'
import { BrowserRouter, Route} from 'react-router-dom' 
import ViewBook from './ViewBook';


class App extends Component {
  state = {
    books : [
      {title: 'Guns, Germs & Steel', isbn: 'abc123', author:'Daimond', id:1},
      {title: 'True Story', isbn: 'abc223', author:'MacDonald', id:2},
      {title: 'Life of Pi', isbn: 'abc323', author:'Martel', id:3},
      {title: 'The Catcher in the Rye', isbn: '12345345', author:'Salinger', id:4},
      {title: 'War and Peace', isbn: '12345sfsd345', author:'Tolstoy', id:5},
      {title: 'The Little Prince', isbn: 'sadwe23e', author:'Saint-Exupéry', id:6},

      
      
    ]
  }
  addBook = (newbook)=>{ //function as a prop
    newbook.id = Math.random(); //set 'unique' id
    let booksc = [...this.state.books, newbook]; //creates copy of array, adds new item. do not altar state outside of setState - destructive practice
    this.setState({
      books: booksc
    })
  }
  deleteBook = (id) => {
    let booksc = this.state.books.filter(book => { 
      return book.id !== id 
    }) // (nondestructive to array) cycles through each book, compares id, adds book to new array if ids dont match
    this.setState({
      books: booksc
    })
    alert("Book Deleted");
  }
  showBook = (id) => {  //nonfunctional placeholder
    let booksc = this.state.books.filter(book => { 
      return book.id === id  
    }) 
    this.setState({
      books: booksc 
    })
    alert("Book Deleted");
  }
  editBook = (id) => { //placeholder 
    let booksc = this.state.books.filter(book => { 
      return book.id !== id 
    }) 
    this.setState({
      books: booksc
    })
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App container">
        <NavBar />
        <div>
        <div className="row">
        <Route exact path='/' render={routeProps => <Home books={this.state.books} editBook={this.editBook} deleteBook={this.deleteBook}/>}/> 
        <Route path='/AddBook' render={routeProps => <AddBook addBook={this.addBook}/>} />
        <Route path='/ViewBook/:id' render={routeProps => <ViewBook books={this.state.books} deleteBook={this.deleteBook}/>} />
        </div>
        </div>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
