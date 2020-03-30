import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-aside"> </div>
      <div className="app-form">
        <div className="pageSwitcher">
          <a href="#" className="pageSwitcher-item">Sign In</a>
          <a href="#" className="pageSwitcher-item pageSwitcher-item-active">Sign Up</a>
        </div>


        <div className="form-title">
          <a href="" className="form-title-link">Sign In</a> or <a href="#" className="form-title-link form-title-link-active">Sign Up</a>
        </div>
        <div className="form-center">
          <form className="form-fields">


            <div className="form-field">
              <label htmlFor="name" className="form-field-label">Full Name</label>
              <input type="text" id="name" className="form-field-input" placeholder="Enter your full name" name="name" />
            </div>


            <div className="form-field">
              <label htmlFor="password" className="form-field-label">Password</label>
              <input type="password" id="password" className="form-field-input" placeholder="Enter your password" name="password" />
            </div>


            <div className="form-field">
              <label htmlFor="email" className="form-field-label">E-Mail Address</label>
              <input type="email" id="email" className="form-field-input" placeholder="Enter your email " name="email" />
            </div>


            <div className="form-field">
              <label className="form-field-checkboxLabel">
                <input type="checkbox" className="form-field-checkbox" name="hasAgreed" />I agree all statements in <a href="#" className="form-field-termsLink">terms of service</a>
              </label>
            </div>


            <div className="form-field">
              <button className="form-field-button mr-20">Sign Up</button>
              <a href="#" className="form-field-link">I'm already a member</a>
            </div>


          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
// onSubmit={this.handleSubmit}
