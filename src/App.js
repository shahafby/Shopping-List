import React, { Component } from 'react';
import styled from 'styled-components';
import { EditModal } from './components/modals/editModal';
import './App.css';
import { Header } from './components/header/Header';
import { AppBody } from './components/body/AppBody';


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

export default App;

