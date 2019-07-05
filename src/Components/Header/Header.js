import React, { Component } from 'react';
import axios from 'axios';

class Header extends Component {
    componentDidMount(){
        axios.get('/auth/session').then(res => {
            console.log(res.data)
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

export default Header;