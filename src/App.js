import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm'
import SignInForm from './pages/SignInForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="app-aside"> </div>
          <div className="app-form">
            <div className="pageSwitcher">
              <NavLink to="/sign-in" activeClassName="pageSwitcher-item-active" className="pageSwitcher-item">Sign In</NavLink>
              <NavLink exact to="/" activeClassName="pageSwitcher-item-active" className="pageSwitcher-item">Sign Up</NavLink>
            </div>


            <div className="form-title">
              <NavLink to="/sign-in" activeClassName="form-title-link-active" className="form-title-link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="form-title-link-active" className="form-title-link">Sign Up</NavLink>
            </div>

            <Route exact path="/" component={SignUpForm}>
            </Route>
            <Route path="/sign-in" component={SignInForm}>
            </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
// onSubmit={this.handleSubmit}
