import React, { Component } from 'react'

class Signup extends Component {
    state = {
        email: '',
        confirmed: false,
        username: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    signup = event => {
        event.preventDefault()
        if (event.target.email === event.target.confirmed) {
            this.setState({
                confirmed: true
            })
        }

        fetch("http://localhost:3000/api/v1/signup", {
            method: "POST",
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password,
                    email: this.state.email
                }
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resp => resp.json()).then(resp => {
            localStorage = resp.jwt
            this.props.history.push("/")
        })
    }

    render() {
        return(
            <form className="signup-form" onSubmit={this.signup}>
                Email:<input type="text" name="email" placeholder="email" onChange={this.handleChange}/><br></br>
                Confirm email:<input type="text" name="confirmed" placeholder="email" /><br></br>
                Username:<input type="text" name="username" placeholder="username" onChange={this.handleChange} /><br></br>
                Password:<input type="password" name="password" placeholder="password" onChange={this.handleChange} /><br></br>

                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Signup