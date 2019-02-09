import React, { Component } from 'react';
import Show from './show';
import AddBook from './AddBook';


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
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Show books={this.state.books} />
        <AddBook addBook={this.addBook}/>
      </div>
    );
  }
}

export default App;
