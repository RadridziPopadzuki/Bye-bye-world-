import React from 'react';
import './App.css';
import Nav from '../nav/Nav';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import Button from '../button/Button';


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
      <div className="app">
        <Nav let navItem={this.props.navItem} />
        <Button />
        <Header let title={this.props.title} />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
