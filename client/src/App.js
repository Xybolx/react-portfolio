import React from 'react';
import { Route, Switch } from "react-router-dom";
import SpeechRecognition from "./components/speechRecognition";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Beach from "./pages/beach";
import './App.css';
import TopNav from './components/navbar';

const App = () => {
  return (
    <div className="App">
      <TopNav />
      <SpeechRecognition />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/beach" component={Beach} />
      </Switch>
    </div>
  );
};

export default App;
