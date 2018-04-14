import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClickPlus() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  handleClickMinus() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.handleClickPlus.bind(this)}>Plus</button>
          <button onClick={this.handleClickMinus.bind(this)}>Minus</button>
          <div>{this.state.count}</div>
        </p>
      </div>
    );
  }
}

export default App;
