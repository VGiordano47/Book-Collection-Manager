import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav-wrapper blue-grey darken-4">
            <div className="container">
                <Link to="/" className="brand-logo left">Book Collection </Link>
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><NavLink to="/AddBook">Add New Book</NavLink></li>
                    </ul>               
            </div>
        </nav>
    )
}

export default NavBar