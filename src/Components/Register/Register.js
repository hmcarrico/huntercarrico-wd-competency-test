import React, { Component } from 'react';

class Register extends Component {
    render(){
        return (
            <div>
                <h1>Register</h1>
                Email: <input />
                Username: <input />
                Password: <input />
                Re Enter Password: <input />
                <hr />
                <button>Sign Up as Editor</button>
                <button>Sign Up as User</button>
            </div>
        )
    }
}

export default Register;