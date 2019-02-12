import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

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
    render(props){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                    <label htmlFor="title">ISBN:</label>
                    <input type="text" id="isbn" onChange={this.handleChange}/>
                    <label htmlFor="title">Author:</label>
                    <input type="text" id="author" onChange={this.handleChange}/>
                    <button className="btn-small blue-grey lighten-1">Submit</button> 
                </form>
            </div>
        )
    }
}
//Cannot seem to redirect back to home page with props.history.push
export default withRouter(AddBook)