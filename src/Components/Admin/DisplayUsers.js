import React from 'react';

function DisplayUser(props){
    const styles = {
        'maxHeight': '200px',
        'maxWidth': '200px'
    }
    const {photo,username,email,user_id} = props.user;
    return (
        <div>
            <img src={photo} style={styles}/>
            <h2>{username}</h2>
            <b>{email}</b>
            <button onClick={() => props.deleteUser(user_id)}>Delete User</button>
        </div>
    )
}

export default DisplayUser;