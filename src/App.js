import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';
import Bar from './components/Bar';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Contact from './components/Contact';
import { register, login, logout } from './actions';

class App extends Component {

  onRegisterFormSubmit = (user) => this.props.dispatch(register(user))
  onLoginFormSubmit = (user) => this.props.dispatch(login(user))
  onLogoutClick = () => this.props.dispatch(logout())

  render() {
    const { user } = this.props

    return (
      <div className="App">
        <Router>
          <Bar>
            <Link to="/">
              Login
            </Link>
            <Link to="/register">
              Register
            </Link>
            {user && (
              <Link to="/contacts">
                Contacts
              </Link>
            )}
            {user && (
              <a href="#" onClick={this.onLogoutClick}>
                Logout
              </a>
            )}
          </Bar>

          <Route path="/" exact component={() => <LoginForm onSubmit={this.onLoginFormSubmit} />} />
          <Route path="/register" exact component={() => <RegisterForm onSubmit={this.onRegisterFormSubmit} />} />
          <Route path="/contacts" exact component={() => <Contact />} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.rootReducer.user
})

export default connect(mapStateToProps, null)(App);
