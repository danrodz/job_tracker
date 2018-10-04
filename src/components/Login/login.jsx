import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'react-materialize';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  login = event => {
    event.preventDefault();

    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.user) {
          localStorage.token = resp.jwt;
          this.props.history.push('/');
        }
      });
  };

  render() {
    return (
      <div className="white container center-text">
        <Row>
          <br />
          <form className="login-form" onSubmit={this.login}>
            <br />
            <Col s={4} />
            <Col s={8}>
              <Input type="text" name="username" label="Username" onChange={this.handleChange} />
            </Col>
            <br />
            <Col s={4} />
            <Col s={8}>
              <Input type="password" name="password" label="Password" onChange={this.handleChange} />
            </Col>
            <br />
            <Col s={5} />
            <Col s={7}>
              <Button>Submit</Button>
            </Col>
            <br />
            <Col s={12} />
          </form>
          <br />
        </Row>
      </div>
    );
  }
}

export default Login;
