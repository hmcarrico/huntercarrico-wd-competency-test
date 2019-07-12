import React, { Component } from 'react';
import DisplayUser from './DisplayUsers';
import axios from 'axios';

class AdminDashboard extends Component{
    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        axios.get('/api/allUsers').then(res => {
            console.log('res', res)
            this.setState({
                users: res.data
            })
        })
    }

    deleteUser = (id) => {
        axios.delete(`/api/user/${id}`).then(res => {
            this.setState({
                users: res.data
            })
        })
    }

    render(){
        const {users} = this.state;
        const displayeUsers = users.map(user => {
            return <div>
                <DisplayUser user={user} deleteUser={this.deleteUser}/>
            </div>
        })
        return (
            <div>
                <h1>Admin Dashboard</h1>
                {displayeUsers}
            </div>
        )
    }
}

export default AdminDashboard;