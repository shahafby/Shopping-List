import React, { Component } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { AppBody } from './components/body/AppBody';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AppBody />
      </div>
    );
  }
}

export default App;

