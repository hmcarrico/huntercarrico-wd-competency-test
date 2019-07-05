import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/reducer';
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
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {
        const { email, password } = this.state;
        axios.post('/auth/login', {email, password}).then(res => {
            if(res.data.message){
                alert(res.data.message)
            } else {
                console.log('logged In', res);
                this.props.updateUser(res.data)
                this.props.history.push('/browse')
            }
        })
    }

    render(){
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


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchtoProps = {
    updateUser
}

export default connect(mapStateToProps, mapDispatchtoProps)(Login);