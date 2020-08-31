import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
    const USERS = [
        {id: 1, name: 'Stuti' , image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9', places: 5}
    ];

    return <UserList items={USERS}/>
};

export default Users;