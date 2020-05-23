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
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login";
import "font-awesome/css/font-awesome.min.css";
import Register from "./Containers/Register";
import ResetPassword from "./Containers/ResetPassword";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Category from "./Containers/Category"
import Auth from "./Authentication/Auth";
class App extends Component {
  render() {
    return (
      <Wrapper>
        <Router>
          <Switch>
            {/* <Route path="/sp/:id">
              <NavBar />
              <SingleProduct />
            </Route> */}
            <Route path="/sp/:id" component={SingleProduct}/> 
            <Route path="/cart">
              <NavBar />
              <Cart />
            </Route>
            <Route path="/login">
              <NavBar />
              <Login />
            </Route>
            <Route path="/profile">
              <ResetPassword />
            </Route>
            <Route path="/Register">
              <NavBar />
              <Register />
            </Route>

            <PrivateRoute path="/WishList" component={WishList} role="user" />
            <PrivateRoute
              path={["/adminpage/:id","/adminpage"]}
              component={AdminPage}
              role="admin"
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
          </Switch>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
