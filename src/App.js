import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Bar, { BarButton } from './components/Bar';
import RegisterForm from './components/RegisterForm';
import { register } from './actions';

class App extends Component {
  onRegisterFormSubmit = (user) => {
    const { dispatch } = this.props;

    dispatch(register(user));
  }

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
        <RegisterForm onSubmit={this.onRegisterFormSubmit} />
      </div>
    );
  }
}

export default connect()(App);
