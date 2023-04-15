import React from 'react';
import './App.css';
import Nav from '../nav/Nav';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h1: "Hello",
      h2: "blya",
      message: ""
    }
  }
  push = () => {
    this.setState({ message: "you push the button" })
  }
  render() {
    return (
      <div className="App">
        <Nav let navItem={this.props.navItem} />
        <div style={{ marginTop: "3rem", width: "40%", display: "flex", justifyContent: 'space-between', position: "relative", left: "30%" }}>
          <h1 style={{ color: "blanchedalmond" }}>{this.state.h1}</h1>
          <h2 style={{ color: "blanchedalmond" }}>{this.state.h2}</h2>
        </div>
        <div style={{ color: "red" }}>
          <button type='button' onClick={this.push}>Push the button</button>
          <p>{this.state.message}</p>
        </div>
        <Header let title={this.props.title} />
        <Main />
        <Footer />
      </div >
    );
  }
}

export default App;
