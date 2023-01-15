import React, { Component } from 'react';
import NavBar from './components/0-header/NavBar';
import BodyContainer from './components/1-body/BodyContainer';
import Footer from "./components/2-footer/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <BodyContainer/>
        <Footer/>
      </div>
    );
  }
}

export default App;
