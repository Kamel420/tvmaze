import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Show from "./components/Show";

class App extends Component {

  render() {
    return (
        <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/show/:id" component={Show} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
