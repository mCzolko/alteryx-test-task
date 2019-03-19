import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Bar, { BarButton } from './components/Bar';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { register, login, logout } from './actions';

class App extends Component {

  onRegisterFormSubmit = (user) => this.props.dispatch(register(user))
  onLoginFormSubmit = (user) => this.props.dispatch(login(user))
  onLogoutClick = () => this.props.dispatch(logout())

  render() {
    const { user } = this.props

    return (
      <div className="App">
        <Bar>
          <BarButton>
            Login
          </BarButton>
          <BarButton>
            Register
          </BarButton>
          {user && (
            <BarButton onClick={this.onLogoutClick}>
              Logout
            </BarButton>
          )}
        </Bar>
        <RegisterForm onSubmit={this.onRegisterFormSubmit} />
        <LoginForm onSubmit={this.onLoginFormSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.rootReducer.user
})

export default connect(mapStateToProps, null)(App);
