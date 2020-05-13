import  React , {Component } from 'react';
import './App.css';
import Wrapper from './Hoc/Wrapper'
import NavBar from './Components/NavBar/NavBar'
class App extends Component {

  render() {
    return (
      <Wrapper>
        <NavBar />

        <h1>This is Home Page</h1>

        
        </Wrapper>
    )
  }
}

export default App;
