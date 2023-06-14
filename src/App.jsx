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

const langPrefix = {french: "fr", english: "en"}

function App() {
  // console.log("App rendered")
  const defaultLang = navigator.language.toLocaleLowerCase().split("-")[0];
  const [langState, updateLangState] = useState(defaultLang);
  console.log("default language detected: " + defaultLang);
  console.log("chosen language: " + langState);

  function switchLanguage() {
    let newLang = ""
    switch (langState) {
        case "en":
            newLang= langPrefix.french
            break;
        
        case "fr":
            newLang = langPrefix.english
            break;
    
        default:
            newLang = langPrefix.english
            break;
    }
    updateLangState(newLang)
  }

  return (
    <div id="app">
      <LangContext.Provider value={langState}>
        <NavBar changeLangCallBack={switchLanguage} />
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
