import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import PageDisplayer from "./components/content/PageDisplayer"
import Footer from "./components/footer/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <PageDisplayer/>
        <Footer/>
      </div>
    );
  }
}

export default App;
