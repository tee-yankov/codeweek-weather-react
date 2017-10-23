import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    weather: {
      currently: {}
    }
  }

  componentDidMount () {
    fetch('http://localhost:9000/')
      .then((v) => v.json())
      .then((v) => this.setState({ weather: v }))
  }

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <p>Current Temperature: {this.state.weather.currently.temperature}</p>
      </div>
    );
  }
}

export default App;
