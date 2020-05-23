<<<<<<< HEAD
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Wrapper from './Hoc/Wrapper'
import NavBar from './Components/NavBar/NavBar'
import  StoreManagerPage from './Containers/StoreManagerPage/StoreManagerPage'
import EditProducts from './Components/StoreManagerComponets/EditProducts';
import SingleProduct from './Containers/SingleProduct'
import Cart from './Containers/Cart'
import WishList from './Containers/WishList'
import AdminPage from './Containers/AdminPage/AdminPage'
import Home from './Containers/Home/Home'
import Login from './Containers/Login'
import 'font-awesome/css/font-awesome.min.css';
import Register from './Containers/Register';
import ResetPassword from './Containers/ResetPassword'
=======
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Wrapper from "./Hoc/Wrapper";
import NavBar from "./Components/NavBar/NavBar";
import StoreManagerPage from "./Containers/StoreManagerPage/StoreManagerPage";
import EditProducts from "./Components/StoreManagerComponets/EditProducts";
import SingleProduct from "./Containers/SingleProduct";
import Cart from "./Containers/Cart";
import WishList from "./Containers/WishList";
import AdminPage from "./Containers/AdminPage/AdminPage";
import Category from "./Containers/Category";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login";
import "font-awesome/css/font-awesome.min.css";
import Register from "./Containers/Register";
import Auth from "./Authentication/Auth";
>>>>>>> 4a2ecef5e7611f0dd4fc72a261e081a33df6cb79
class App extends Component {
  // cnt = 0;
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     logged: Auth.isAuthenticated(),
  //     role: Auth.getUserLevel(),
  //   };
  // }
  render() {
    return (
      <Wrapper>
        <Router>
          <Switch>
            <Route path="/sp">
              <NavBar />
              <SingleProduct />
            </Route>
            <Route path="/cart">
              <NavBar />
              <Cart />
            </Route>
            <Route path="/login">
              <NavBar />
              <Login />
<<<<<<< HEAD
            </Route >
            <Route path="/profile">
              <ResetPassword />
            </Route >
            <Route path="/AdminPage">
              <AdminPage />
            </Route >
=======
            </Route>
            <Route
              path="/logout"
              render={() => {
                Auth.logout();
                return (
                  <Wrapper>
                    <NavBar /> <Home />
                  </Wrapper>
                );
              }}
            />

            <PrivateRoute
              path="/AdminPage"
              component={AdminPage}
              role="admin"
            />
>>>>>>> 4a2ecef5e7611f0dd4fc72a261e081a33df6cb79
            <Route path="/Register">
              <NavBar />
              <Register />
            </Route>

            <PrivateRoute
              path="/WishList"
              component={WishList}
              role="user"
            />
            <Route path="/Home">
              <NavBar />
              <Home />
            </Route>
            <Route path="/shop">
              <NavBar />
              <Category/>
            </Route>
            <Route path="/StoreManagerPage">
              <NavBar />
              <StoreManagerPage StoreMangerID="5ebfe25de12d862560358088" />
            </Route>
            <Route path="/StoreManagerPage/edit/:id">
              <NavBar />
              <EditProducts />
            </Route>
          </Switch>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
