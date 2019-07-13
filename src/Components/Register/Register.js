import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/reducer';
import axios from 'axios';
import './Register.scss';

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
            axios.post('/auth/register', {email, username, password, role}).then(res => {
                alert(res.data)
                this.props.updateUser(res.data.user)
                this.props.history.push('/browse')
            })
        }
    }

    render(){
        return (
            <div className='register'>
                <div>
                    <h1>
                        Register
                    </h1>
                </div>
                <div>
                    <h3>
                        Email:
                    </h3>
                    <input name="email" onChange={(e) => this.handleInputs(e)}/>
                </div>
                <div>
                    <h3>
                        Username:
                    </h3>
                    <input name="username" onChange={(e) => this.handleInputs(e)}/>
                </div>
                <div>
                    <select onChange={(e) => this.setState({role: e.target.value})}>
                        <option selected disabled>Choose Role</option>
                        <option value="reader">Reader</option>
                        <option value="editor">Author</option>
                    </select>
                </div>
                <div>
                    <h3>
                        Password:
                    </h3>
                    <input type="password" name="password" onChange={(e) => this.handleInputs(e)}/>
                </div>
                <div>
                    <h3>
                        Re Enter Password:
                    </h3>
                    <input type="password"  name="verify" onChange={(e) => this.handleInputs(e)}/>
                </div>
                <div>
                    <button onClick={this.register}>
                        Sign Up!
                    </button>
                </div>
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

export default connect(mapStateToProps, mapDispatchtoProps)(Register);