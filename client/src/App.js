import React from 'react';
import { Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import './App.css';

function App() {
  return (
    <div className="jumbotron jumbotron-fluid App">
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;
