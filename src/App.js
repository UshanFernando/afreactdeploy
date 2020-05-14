import React, { Component } from 'react';
import './App.css';
import Wrapper from './Hoc/Wrapper'
import NavBar from './Components/NavBar/NavBar'
import AdminPage from './Containers/AdminPage/AdminPage'
import Login from './Containers/Login'
import 'font-awesome/css/font-awesome.min.css';
class App extends Component {

  render() {
    return (
      <Wrapper>
        <NavBar />
        <AdminPage />
        <Login/>
      </Wrapper>
    )
  }
}

export default App;
