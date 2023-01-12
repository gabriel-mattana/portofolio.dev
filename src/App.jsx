import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import Footer from "./components/footer/Footer";
import './App.css';
import MainContainer from './components/content/MainContainer';

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
