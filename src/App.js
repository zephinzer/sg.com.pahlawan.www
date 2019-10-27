import React from 'react';
import './App.css';
import {hot} from 'react-hot-loader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Coming Soon
        </div>
        <br />
        <img src="./danger-keep-out.jpg" className="App-logo" alt="logo" />
        <br />
        <div>
          &copy; 2019 Pahlawan Pte. Ltd.
        </div>
        <div>
          <span style={{fontSize: '16px'}}>
            For enquiries: <a href="mailto:pahlawanenquiry@gmail.com">pahlawanenquiry@gmail.com</a>
          </span>
        </div>
        <div>
          <span style={{fontSize: '16px'}}>
            UEN: 201930010D
          </span>
          <br />
          <span style={{fontSize: '16px'}}>
            7, Mandai Link, #03-32, Mandai Connection, Singapore 728653
          </span>
        </div>
      </header>
    </div>
  );
}

export default hot(module)(App);
