import axios from 'axios';

export const loginApi = (email, password, cb) => {
    return axios.post(`https://arcane-ravine-98370.herokuapp.com/http://eshop99-api.herokuapp.com/api/users/login`, {

        email,
        password
    })
}