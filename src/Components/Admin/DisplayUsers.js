import React from 'react';

function DisplayUser(props){
    const styles = {
        'maxHeight': '200px',
        'maxWidth': '200px'
    }
    const {photo,username,email,user_id, role} = props.user;
    const {newRole} = props;
    return (
        <div>
            <img src={photo} style={styles}/>
            <h2>{username}</h2>
            <b>{email}</b>
            <select onChange={(e) => props.updateNewRole(e)}>
                <option value={role}>{role}</option>
                <option value={role === 'admin' ? 'reader' : 'admin'}>{role === 'admin' ? 'reader' : 'admin'}</option>
                <option value={role === 'reader' ? 'editor' : 'admin'}>{role === 'reader' ? 'reader' : 'editor'}</option>
            </select>
            <button onClick={() => props.updateUser(newRole,user_id)}>Edit Users Role</button>
            <button onClick={() => props.deleteUser(user_id)}>Delete User</button>
        </div>
    )
}

export default DisplayUser;