import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav-wrapper blue-grey darken-4">
            <div className="container">
                <a className="brand-logo">Book Collection
                    <ul className= "right">
                        <li><Link to="/">Home</Link></li>
                        <li><NavLink to="/AddBook">Add New Book</NavLink></li>
                    </ul>
                </a>
            </div>
        </nav>
    )
}

export default NavBar