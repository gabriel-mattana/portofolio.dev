import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import ContentDisplayer from "./components/content/ContentDisplayer"
import Footer from "./components/footer/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <ContentDisplayer/>
        <Footer/>
      </div>
    );
  }
}

export default App;
