import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />;
        <Main />;
        <footer className='footer'>Made by <a href='#'>Radridzi</a></footer>
      </div>
    );
  }
}

export default App;
