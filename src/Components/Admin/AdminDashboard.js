import React, { Component } from 'react';
import DisplayUser from './DisplayUsers';
import axios from 'axios';

class AdminDashboard extends Component{
    constructor(){
        super();
        this.state = {
            users: [],
            newRole: null
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

    editUserRole = (role, id) => {
        console.log(role)
        axios.put(`/api/user/${id}?role=${role}`).then(res => {
            console.log('ressss', res)
            this.setState({
                users: res.data
            })
            
        })
    }

    handleSelect = (e) => {
        this.setState({
            newRole: e.target.value
        })
    }

    render(){
        const {users, newRole} = this.state;
        const displayeUsers = users.map(user => {
            return <div>
                <DisplayUser user={user} newRole={newRole} updateNewRole={this.handleSelect} deleteUser={this.deleteUser} updateUser={this.editUserRole}/>
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