import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render(){
        return (
            <div>
                <h1>Welcome</h1>
                <div>
                    <Link to='/register'>Register</Link>
                    <hr />
                    <Link to='login'>Login</Link>
                    <hr />
                    <Link to='/browse'>Continue as Guest</Link>
                </div>
            </div>
        )
    }
}

export default Home;