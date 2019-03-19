import React, { Component } from 'react';
import './App.css';
import Bar, { BarButton } from './components/Bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bar>
          <BarButton>
            Login
          </BarButton>
          <BarButton>
            Register
          </BarButton>
        </Bar>
      </div>
    );
  }
}

export default App;
