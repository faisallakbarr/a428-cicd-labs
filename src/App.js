import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Selamat datang di React App!</h1>
          <h1 className='App-title'>Hallo Perkenalkan nama saya Faisal Akbar</h1>
          <p>Saya sedang mencoba membuat web sederhana dengan reactjs dan build jenkins pipeline</p>
        </header>
        <body className='App-body'>
          <div className='container'>
            <div className='calculator'>
              <form action="">
                <div>
                  <input type="text" />
                </div>
              </form>
            </div>
          </div>
          
        </body>
        <footer className='App-footer'>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </footer>
      </div>
    );
  }
}

export default App;
