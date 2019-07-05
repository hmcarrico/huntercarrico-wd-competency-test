import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    handleInputs = (e) => {
        console.log('hello')
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {
        const { email, password } = this.state;
        axios.post('/auth/loginVanilla', {email, password}).then(res => {
            if(res.data.message){
                alert(res.data.message)
            } else {
                console.log('logged In', res);
                this.props.history.push('/browse')
            }
        })
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <h1>Login</h1>
                Email: <input name="email" onChange={(e) => this.handleInputs(e)}/>
                Password: <input type="password" name="password" onChange={(e) => this.handleInputs(e)}/>
                <hr />
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login;