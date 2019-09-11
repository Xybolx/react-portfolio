import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import SpeechRecognition from "./components/speechRecognition";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import './App.css';

function App() {

  const [isAbout, setIsAbout] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [isPortfolio, setIsPortfolio] = useState(false);

  const getAbout = () => {
    if (isAbout) {
      setIsAbout(false);
    } else if (!isAbout) {
      setIsAbout(true);
    }
  };

  const getContact = () => {
    if (isContact) {
      setIsContact(false);
    } else if (!isContact) {
      setIsContact(true);
    }
  };

  const getPortfolio = () => {
    if (isPortfolio) {
      setIsPortfolio(false);
    } else if (!isPortfolio) {
      setIsPortfolio(true);
    }
  };

  return (
    <div className="jumbotron jumbotron-fluid App">
      <SpeechRecognition isAbout={isAbout} getAbout={getAbout} isContact={isContact} getContact={getContact} isPortfolio={isPortfolio} getPortfolio={getPortfolio} />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;
