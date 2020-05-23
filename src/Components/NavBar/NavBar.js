import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "../../Containers/Login";
import Register from "../../Containers/Register";
import Auth from "../../Authentication/Auth";
import { render } from "@testing-library/react";

// function NavBar() {
class NavBar extends Component {
  state = {
    isOpen: true
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `navbar-collapse offset ${this.state.isOpen ? " collapse" : ""}`;
    return (
      <header className="header_area fixed">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand logo_h" href="index.html">
                <img src="img/logo.png" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                onClick={this.toggleOpen}
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div
                className={menuClass}
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="Home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="category.html">
                          Shop Category
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="single-product.html">
                          Product Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="checkout.html">
                          Product Checkout
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="confirmation.html">
                          Confirmation
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="cart.html">
                          Shopping Cart
                        </a>
                      </li>
                    </ul>
                  </li>
                  {Auth.isAuthenticated() && Auth.getUserLevel() == "admin" ? (
                    <li className="nav-item submenu dropdown">
                      <a
                        href="/adminPage"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Admin Page
                      </a>
                      {/* <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link" href="blog.html">
                            Manage Category
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="single-blog.html">
                            Manage Store Mangers  
                          </a>
                        </li>
                      </ul> */}
                    </li>
                  ) : null}
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>

                <ul className="nav-shop">
                  <li className="nav-item">
                    {/* <form class="form-inline active-cyan-4">
                                            <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                                            <i class="fas fa-search" aria-hidden="true"></i>
                                        </form> */}
                  </li>
                  <li className="nav-item">
                    <a href="/WishList">
                      <button>
                        <i className="fa fa-heart"></i>
                        <span className="nav-shop__circle">3</span>
                      </button>
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    <a href="/cart">
                      <button>
                        <i className="fa fa-shopping-cart"></i>
                        <span className="nav-shop__circle">3</span>
                      </button>
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    <a href="/cart">
                      <button>
                        <i className="fa fa-user"></i>
                      </button>
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                                    <a className="button button-header" href={Auth.isAuthenticated()?"/logout":"/login"}>
                      {Auth.isAuthenticated() ? "Logout" : "Login/Register"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;
