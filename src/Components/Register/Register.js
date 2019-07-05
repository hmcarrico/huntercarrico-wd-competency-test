import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            email: "",
            username: "",
            password: "",
            verify: "",
            role: null
        }
    }

    handleInputs = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = () => {
        const { email, username, password, verify, role } = this.state;
        if(password !== verify){
            alert('passwords do not match')
        } else if(!role) {
            alert('please choose a role')
        } else {
            axios.post('/auth/registerVanilla', {email, username, password, role}).then(res => {
                alert(res.data)
                this.props.history.push('/browse')
            })
        }
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <h1>Register</h1>
                Email: <input name="email" onChange={(e) => this.handleInputs(e)}/> <br />
                Username: <input name="username" onChange={(e) => this.handleInputs(e)}/> <br />
                <select onChange={(e) => this.setState({role: e.target.value})}>
                    <option selected disabled>Choose Role</option>
                    <option value="vanilla">Reader</option>
                    <option value="editor">Author</option>
                </select> <br />
                Password: <input type="password" name="password" onChange={(e) => this.handleInputs(e)}/><br />
                Re Enter Password: <input type="password"  name="verify" onChange={(e) => this.handleInputs(e)}/><br />
                <hr />
                <button onClick={this.register}>Sign Up!</button>
            </div>
        )
    }
}

export default Register;