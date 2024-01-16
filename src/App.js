import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const [value, setValue] = useState('');

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
                <div className="display">
                  <input type="text" value={value}/>
                </div>
                <div>
                  <input type="button" value="AC" onClick={e => setValue('')}/>
                  <input type="button" value="DEL" onClick={e => setValue(value.slice(0, -1))}/>
                  <input type="button" value="." onClick={e => setValue(value + e.target.value)}/>
                  <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
                </div>
                <div>
                  <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
                  <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
                  <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
                  <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
                </div>
                <div>
                  <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
                  <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
                  <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
                  <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
                </div>
                <div>
                  <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
                  <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
                  <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
                  <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
                </div>
                <div>
                  <input type="button" value="00" onClick={e => setValue(value + e.target.value)}/>
                  <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
                  <input type="button" value="=" className='equal' onClick={e => setValue(eval(value))}/>
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
