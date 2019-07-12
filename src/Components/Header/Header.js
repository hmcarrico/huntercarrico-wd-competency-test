import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/reducer';
import axios from 'axios';

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
        return (
            <div>
                <Link to='/'><button>Home</button></Link>
                <Link to='/create'><button>Create Article</button></Link>
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