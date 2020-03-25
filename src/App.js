import React from 'react';
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
