import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;


        this.setState({
            [name]: value
        })
    }
    handleSubmit(e) {
        e.preventDefault();

        alert(`The form was submiited with the following data: ${this.state.email}, ${this.state.password}`);
    }
    render() {
        return (
            <div className="form-center">
                <form onSubmit={this.handleSubmit} className="form-fields">


                    <div className="form-field">
                        <label htmlFor="email" className="form-field-label">E-Mail Address</label>
                        <input type="email" id="email" className="form-field-input" placeholder="Enter your email " name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="form-field">
                        <label htmlFor="password" className="form-field-label">Password</label>
                        <input type="password" id="password" className="form-field-input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
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
