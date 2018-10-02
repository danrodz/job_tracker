import React, { Component } from 'react'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  login = event => {
    event.preventDefault()

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password
        }
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(resp => resp.json()).then(resp => {
      if (resp.user) {
        localStorage.token = resp.jwt
        this.props.history.push("/")
      }
    })
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.login}>
        <label>Username</label>
        <input type="text" name="username" onChange={this.handleChange} />
        <label>Password</label>
        <input type="password" name="password" onChange={this.handleChange}/>

        <button>Submit</button>
      </form>
    )
  }
}

export default Login
