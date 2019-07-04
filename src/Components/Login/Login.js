import React, { Component } from 'react';

class Login extends Component {
    render(){
        return (
            <div>
                <h1>Login</h1>
                Email: <input />
                Password: <input />
                <hr />
                <button>Login</button>
            </div>
        )
    }
}

export default Login;