import React, {Component} from 'react';

class AddBook extends Component{
    state ={
        title: null,
        isbn: null,
        author: null
    }
    handleChange = (e) => {  //updates form items live
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBook(this.state); //takes form items, passes into App.js
        alert("Book Added to Collection");
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                    <label htmlFor="title">ISBN:</label>
                    <input type="text" id="isbn" onChange={this.handleChange}/>
                    <label htmlFor="title">Author:</label>
                    <input type="text" id="author" onChange={this.handleChange}/>
                    <button class="btn-small blue-grey lighten-1">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddBook;