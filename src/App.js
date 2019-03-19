import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Bar, { BarButton } from './components/Bar';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { register, login } from './actions';

class App extends Component {

  onRegisterFormSubmit = (user) => {
    const { dispatch } = this.props;

    dispatch(register(user));
  }

  onLoginFormSubmit = (user) => {
    const { dispatch } = this.props;

    dispatch(login(user));
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
        <LoginForm onSubmit={this.onLoginFormSubmit} />
      </div>
    );
  }
}

export default connect()(App);
