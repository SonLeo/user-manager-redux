import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from './User';
import { fetchUsers } from '../redux/action';

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const [isShowingUsers, setIsShowingUsers] = useState(false);

    const handleClick = () => {
        if (!isShowingUsers) {
            dispatch(fetchUsers());
        }
        setIsShowingUsers(!isShowingUsers);
    }

    return (
        <div>
            <h1>User Management</h1>
            <button onClick={handleClick}>
                {isShowingUsers ? 'Hide Users' : 'Get Users'}
            </button>
            {isShowingUsers && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => <User user={user} key={user.id} />)}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default UserList;
