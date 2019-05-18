// in src/authProvider.js
import { AUTH_LOGOUT } from 'react-admin';

export default (type, params) => {
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
        return Promise.resolve();
    }
    return Promise.resolve();
};