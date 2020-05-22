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
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login";
import "font-awesome/css/font-awesome.min.css";
import Register from "./Containers/Register";
import Auth from "./Authentication/Auth"
class App extends Component {
  cnt = 0;
  render() {
    return (
      <Wrapper>
        <NavBar />

        <Router>
          <Switch>
            <Route path="/sp">
              <SingleProduct />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route
              path="/logout"
              render={() => {
                Auth.logout();
                return <Home />;
              }}
            />
      
            <PrivateRoute
              path="/AdminPage"
              component={AdminPage}
              role="admin"
            />
            <Route path="/Register">
              <Register />
            </Route>
            <Route path="/WishList">
              <WishList />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/StoreManagerPage">
              <StoreManagerPage StoreMangerID="5ebfe25de12d862560358088" />
            </Route>
            <Route path="/StoreManagerPage/edit/:id">
              <EditProducts />
            </Route>
          </Switch>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
