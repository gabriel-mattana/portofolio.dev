import React, { Component } from 'react';
import NavBar from './components/0-header/NavBar';
import Footer from "./components/2-footer/Footer";
import './App.css';
import MainContainer from './components/1-body/BodyContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <MainContainer/>
        <Footer/>
      </div>
    );
  }
}

export default App;
