import axios from 'axios';
const SERVER_URL = process.env.SERVER_URL || 'http://Localhost:4000';
axios.defaults.baseURL = SERVER_URL;

const setAuthToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const resetAuthToken = () => {
    axios.defaults.headers.common.Authorization = '';
}


export const signUp = async (data) => {

    try {
        const res = await axios.post('/api/signup', data);
        return res.data;
    } catch(err) {
        console.log(err);
        throw new Error(err.message)
    }
    
}

export const signIn = async (data) => {
    try {
        const res = await axios.post('/api/signin', data);
        return res.data;
    } catch(err) {
        console.log(err);
        throw new Error(err.message)
    }
}

export const verify = async (token) => {
    try {
        const res = await axios.get(`/api/verify/${token}`);
        return res.data;
    } catch(err) {
        console.log(err);
        throw new Error(err.response.data.message)
    }
}

export const checkToken = async (token) => {
    setAuthToken(token);
    try {
        const res = await axios.get(`/api/auth`);
        return res.data;
    } catch(err) {
        console.log("Tocken check", err);
        throw new Error(err.response.data.message)
    }
}