import React, { Component } from 'react';
import NavBar from './NavBar'
import Home from './Home'
import AddBook from './AddBook'
import { BrowserRouter, Route, } from 'react-router-dom' 
import ViewBook from './ViewBook';


class App extends Component {
  state = {
    books : [
      {title: 'Guns, Germs & Steel', isbn: 'abc123', author:'Daimond', id:1},
      {title: 'True Story', isbn: 'abc223', author:'MacDonald', id:2},
      {title: 'Life of Pi', isbn: 'abc323', author:'Martel', id:3}
    ]
  }
  addBook = (newbook)=>{ //function as a prop
    newbook.id = Math.random(); //set 'unique' id
    let booksc = [...this.state.books, newbook]; //creates copy of array, adds new item. do not altar state outside of setState - destructive practice
    this.setState({
      books: booksc
    })
    console.log(booksc);
  }
  deleteBook = (id) => {
    let booksc = this.state.books.filter(book => { 
      return book.id !== id 
    }) // (nondestructive to array) cycles through each book, compares id, adds book to new array if ids dont match
    this.setState({
      books: booksc
    })
  }
  editBook = (id) => { //placeholder - copy of delete
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
        <div class="row">
        <Route exact path='/' render={routeProps => <Home books={this.state.books} editBook={this.editBook} deleteBook={this.deleteBook}/>}/> 
        <Route path='/AddBook' render={routeProps => <AddBook addBook={this.addBook}/>} />
        <Route path='/ViewBook' render={routeProps => <ViewBook books={this.state.books} deleteBook={this.deleteBook}/>} />
        </div>
        </div>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
