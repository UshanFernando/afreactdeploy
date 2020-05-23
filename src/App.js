import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Wrapper from './Hoc/Wrapper'
import NavBar from './Components/NavBar/NavBar'
import  StoreManagerPage from './Containers/StoreManagerPage/StoreManagerPage'
import SingleProduct from './Containers/SingleProduct'
import Cart from './Containers/Cart'
import WishList from './Containers/WishList'
import AdminPage from './Containers/AdminPage/AdminPage'
import Home from './Containers/Home/Home'
import Login from './Containers/Login'
import 'font-awesome/css/font-awesome.min.css';
import Register from './Containers/Register';
class App extends Component {
  cnt=0;
  render() {
    return (
      <Wrapper>
        
        <NavBar />
        
        <Router>
          <Switch>
            <Route path="/sp">
              <SingleProduct/>
            </Route >
            <Route path="/cart">
              <Cart/>
            </Route >
            <Route path="/login">
              <Login />
            </Route >
            <Route path="/AdminPage">
              <AdminPage />
            </Route >
            <Route path="/Register">
              <Register />
            </Route >
            <Route path="/WishList">
              <WishList />
            </Route >
            <Route path="/Home">
              <Home />
            </Route >
            <Route path="/StoreManagerPage">
              <StoreManagerPage />
            </Route >
            
          </Switch>
        </Router>
       
      </Wrapper>
    )
  }
}

export default App;
