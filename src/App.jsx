import React, { Component } from "react";
import NavBar from "./components/0-header/NavBar";

import Footer from "./components/2-footer/Footer";
import "./App.css";
import VideoGames from "./components/1-body/content/VideoGames";
import Books from "./components/1-body/content/Books";
import Introduction from "./components/1-body/content/Introduction";
import ContactForm from "./components/1-body/content/ContactForm";
import ReturnToTopBtn from "./components/1-body/content/ReturnToTopBtn";
import LanguageBtn from "./components/1-body/content/LanguageBtn";

class App extends Component {
  render() {
    return (
      <div id="app">
        <NavBar />
        <ReturnToTopBtn/>
        <main>
          <Introduction/>
          <VideoGames />
          <Books />
          <ContactForm/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
