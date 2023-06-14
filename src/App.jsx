import React, { Component, useContext, useState } from "react";
import NavBar from "./components/0-header/NavBar";

import Footer from "./components/2-footer/Footer";
import "./App.css";
import VideoGames from "./components/1-body/content/VideoGames";
import Books from "./components/1-body/content/Books";
import Introduction from "./components/1-body/content/Introduction";
import ContactForm from "./components/1-body/content/ContactForm";
import ReturnToTopBtn from "./components/1-body/content/ReturnToTopBtn";
import { LangContext } from "./utils";

function App() {
  let defaultLang = navigator.language.toLocaleLowerCase().split("-")[0];
  const [langState, updateLangState] = useState(defaultLang);
  console.log("default language detected: " + defaultLang);
  console.log("chosen language: " + langState);

  return (
    <div id="app">
      <LangContext.Provider value={langState}>
        <NavBar changeLangCallBack={updateLangState} />
        <ReturnToTopBtn />
        <main>
          <Introduction />
          <VideoGames />
          <Books />
          <ContactForm />
        </main>
      </LangContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
