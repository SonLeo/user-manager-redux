import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/action';
import axios from 'axios';

const User = ({ user }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
      axios
        .delete(`http://localhost:3001/users/${user.id}`)
        .then(() => {
          dispatch(deleteUser(user.id))
        })
        .catch(error => {
          alert("Error deleting user")
        })
    }

    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <td>
                <button onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    );
};

export default User;
