export const FETCH_USERS = 'FETCH_USERS';
export const DELETE_USER = 'DELETE_USER';
export const SET_USERS = 'SET_USERS';

export const fetchUsers = () => ({ type: FETCH_USERS });
export const deleteUser = (id) => ({ type: DELETE_USER, payload: id });
export const setUsers = (users) => ({ type: SET_USERS, payload: users });
