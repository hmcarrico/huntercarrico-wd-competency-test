import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NYC from '../../media/nyc.mp4';
import './Home.scss';

class Home extends Component {
    render(){
        return (
            <div className='home'>
                <video autoPlay muted loop id="myVideo">
                    <source src={NYC} type="video/mp4" />
                </video>
                <div className='home__heading'>
                </div>
                <div className='home__links'>
                    <h1>Welcome</h1>
                    <Link to='/register'><button>Register</button></Link>
                    <Link to='login'><button>Login</button></Link>
                    <Link to='/browse'><button>Continue as Guest</button></Link>
                </div>
            </div>
        )
    }
}

export default Home;