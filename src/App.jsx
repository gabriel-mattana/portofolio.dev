import React, { Component } from "react";
import NavBar from "./components/0-header/NavBar";

import Footer from "./components/2-footer/Footer";
import "./App.css";
import VideoGames from "./components/1-body/content/VideoGames";
import Books from "./components/1-body/content/Books";

class App extends Component {
  render() {
    return (
      <div id="app">
        <NavBar />
        <div id="content_container">
          <VideoGames />
          <Books />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
