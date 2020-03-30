import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
              <a href="#" className="pageSwitcher-item">Sign In</a>
              <a href="#" className="pageSwitcher-item pageSwitcher-item-active">Sign Up</a>
            </div>


            <div className="form-title">
              <Link to="/sign-in" className="form-title-link">Sign In</Link> or <Link to="/" className="form-title-link form-title-link-active">Sign Up</Link>
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
