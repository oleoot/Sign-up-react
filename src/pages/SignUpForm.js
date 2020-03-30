import React, { Component } from 'react';
import { Link } from "react-router-dom";
class SignUpForm extends Component {

    render() {
        return (
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
                        <Link to="/sign-in" className="form-field-link">I'm already a member</Link>
                    </div>


                </form>
            </div>
        )
    }
}




export default SignUpForm;
