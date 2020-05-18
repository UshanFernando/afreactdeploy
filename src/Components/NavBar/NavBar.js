import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Login from '../../Containers/Login';
import Register from '../../Containers/Register';
import { render } from '@testing-library/react';

// function NavBar() {
class NavBar extends Component {
    render() {
        return (

            <header className="header_area fixed">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt="" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
                                    <li className="nav-item active"><a className="nav-link" href="Home">Home</a></li>
                                    <li className="nav-item submenu dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                            aria-expanded="false">Shop</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a className="nav-link" href="category.html">Shop Category</a></li>
                                            <li className="nav-item"><a className="nav-link" href="single-product.html">Product Details</a></li>
                                            <li className="nav-item"><a className="nav-link" href="checkout.html">Product Checkout</a></li>
                                            <li className="nav-item"><a className="nav-link" href="confirmation.html">Confirmation</a></li>
                                            <li className="nav-item"><a className="nav-link" href="cart.html">Shopping Cart</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item submenu dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                            aria-expanded="false">Blog</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                                            <li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item submenu dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                            aria-expanded="false">Pages</a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>


                                </ul>

                                <ul className="nav-shop">
                                    <li class="nav-item">
                                        <form class="form-inline active-cyan-4">
                                            <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                                            <i class="fas fa-search" aria-hidden="true"></i>
                                        </form>
                                    </li>
                                    <li className="nav-item"><button><i class="far fa-heart"></i><span className="nav-shop__circle">3</span></button> </li>
                                    <li className="nav-item"><button><i className="ti-shopping-cart"></i><span className="nav-shop__circle">3</span></button> </li>
                                    <li class="nav-item"><a class="button button-header" href="/login">Login/Register</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}


export default NavBar
