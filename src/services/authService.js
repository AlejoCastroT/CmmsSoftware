import axios from 'axios';

export const loginUser = (username, password) => {
    return axios.post('https://cmms-backend-g8ek.onrender.com/users/login', {
        username,
        password
    });
}