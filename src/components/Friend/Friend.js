import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {

    const {name,email,username,id}=friend
    return (
        <div className='friend'>
            <h1>Name:{name}</h1>
            <p>Email:{email}</p>
            <p><small>UserName:to{`/friend ${id}`}<Link>{username}</Link></small></p>
        </div>
    );
};

export default Friend;