import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>
    );
  }
}

export default App;
