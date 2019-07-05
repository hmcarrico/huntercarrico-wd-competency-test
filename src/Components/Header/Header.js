import React, { Component } from 'react';
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
                Header
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