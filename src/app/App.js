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
      h2: "blya"
    }
  }
  render() {
    return (
      <div className="App">
        <Nav let navItem={this.props.navItem} />
        <div style={{ marginTop: "3rem", display: "flex", position: "relative", left: "45%" }}>
          <h1 style={{ color: "blanchedalmond" }}>{this.state.h1}</h1>
          <h2 style={{ color: "blanchedalmond" }}>{this.state.h2}</h2>
        </div>
        <Header let title={this.props.title} />
        <Main />
        <Footer />
      </div >
    );
  }
}

export default App;
