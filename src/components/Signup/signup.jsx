import React, { Component } from 'react'

class Signup extends Component {
    render() {
        return(
            <form className="signup-form">
                Email:<input type="text" name="email" placeholder="email"/><br></br>
                Confirm email:<input type="text" name="confirm-email" placeholder="email"/><br></br>
                Username:<input type="text" name="username" placeholder="username"/><br></br>
                Password:<input type="password" name="password" placeholder="password"/><br></br>

                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Signup