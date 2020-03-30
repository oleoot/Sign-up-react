import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SignInForm extends Component {

    render() {
        return (
            <div className="form-center">
                <form className="form-fields">


                    <div className="form-field">
                        <label htmlFor="email" className="form-field-label">E-Mail Address</label>
                        <input type="email" id="email" className="form-field-input" placeholder="Enter your email " name="email" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="password" className="form-field-label">Password</label>
                        <input type="password" id="password" className="form-field-input" placeholder="Enter your password" name="password" />
                    </div>

                    <div className="form-field">
                        <button className="form-field-button mr-20">Sign In</button>
                        <Link to="/" className="form-field-link">Create an account</Link>
                    </div>


                </form>
            </div>
        )
    }
}




export default SignInForm;
