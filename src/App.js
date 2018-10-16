import React, { Component } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';
import { Header } from './header/Header';
import { AppBody } from './body/AppBody';


class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header />
          <AppBody />
        </div>
      </div>
    );
  }
}

const appBackground = styled.div`
  border: 1px solid #000;
  background-image: url('http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/5w/5t/p05w5tk2.jpg');
  width: 2000px;
  height: 2000px;
`;

/*
(
  <div>
    <div className="App">
      <Header />
      <header className="App-header">
        <AppBody />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
      </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      </a>
      </header>
    </div>
  </div>
);
*/
export default App;

