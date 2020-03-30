import React, { Component } from 'react';
import { Link } from "react-router-dom";
class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            password: "",
            hasAgreed: false
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

        alert(`The form was submiited with the following data: ${this.state.name}, ${this.state.password}, ${this.state.email}, ${this.state.hasAgreed}`);
    }

    render() {
        return (
            <div className="form-center">
                <form onSubmit={this.handleSubmit} className="form-fields">


                    <div className="form-field">
                        <label htmlFor="name" className="form-field-label">Full Name</label>
                        <input type="text" id="name" className="form-field-input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>


                    <div className="form-field">
                        <label htmlFor="password" className="form-field-label">Password</label>
                        <input type="password" id="password" className="form-field-input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>


                    <div className="form-field">
                        <label htmlFor="email" className="form-field-label">E-Mail Address</label>
                        <input type="email" id="email" className="form-field-input" placeholder="Enter your email " name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>


                    <div className="form-field">
                        <label className="form-field-checkboxLabel">
                            <input type="checkbox" className="form-field-checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} />I agree all statements in <a href="#" className="form-field-termsLink">terms of service</a>
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
