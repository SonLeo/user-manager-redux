import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_USERS, DELETE_USER, setUsers } from '../redux/action';

function* fetchUsers() {
    const response = yield call(axios.get, 'http://localhost:3001/users');
    yield put(setUsers(response.data));
}

function* deleteUser(action) {
    const response = yield call(axios.delete, `http://localhost:3001/users/${action.payload}`);
    if (response.status === 200) {
        yield put(fetchUsers());
        alert('User deleted successfully!');
    } else {
        alert('Failed to delete user!');
    }
}

function* rootSaga() {
    yield takeEvery(FETCH_USERS, fetchUsers);
    yield takeEvery(DELETE_USER, deleteUser);
}

export default rootSaga;
