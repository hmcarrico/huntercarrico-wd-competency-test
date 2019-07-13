import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/reducer';
import axios from 'axios';
import './Header.scss';

class Header extends Component {
    componentDidMount(){
        axios.get('/auth/session').then(res => {
            if(res.data !== ""){
                console.log('you are logged in')
                this.props.updateUser(res.data)
            } else {
                console.log('not logged in')
            }
        })
    }
    render(){
        const {user} = this.props;
        return (
            <div>
                {
                    user && user.role === 'editor' ?
                    <div className='header'>
                        <Link to='/'><button>Home</button></Link>
                        <h1>Article City</h1>
                        <Link to='/create'><button>Create Article</button></Link>
                    </div>
                    :
                    // ? user &&
                    <div className='header'>
                        <Link to='/browse'><button>Browse</button></Link>
                        <h1>Aricle City</h1>
                        <Link to='/'><button>Login/Register</button></Link>
                    </div>
                    // :
                    // <></>
                    // :
                    // <></>
                }
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

export default connect(mapStateToProps, mapDispatchtoProps)(Header);