import React, { Component, useContext, useState } from "react";
import NavBar from "./components/0-navbar/NavBar";
import Footer from "./components/2-footer/Footer";
import VideoGames from "./components/1-body/sections/VideoGames";
import Books from "./components/1-body/sections/Books";
import Introduction from "./components/1-body/sections/Introduction";
import ContactForm from "./components/1-body/sections/ContactForm";
import ReturnToTopBtn from "./components/1-body/components/buttons/ReturnToTopBtn";
import { LangContext } from "./utils";
import "./App.css";

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
        <main id="main">
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
