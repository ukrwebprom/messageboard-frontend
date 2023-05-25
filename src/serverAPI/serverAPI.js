import axios from 'axios';
axios.defaults.baseURL = 'https://messageboard-restapi-backend.onrender.com';

export const signUp = async (data) => {

    try {
        const res = await axios.post('/api/signup', data);
        return res.data;
    } catch(err) {
        console.log(err);
        throw new Error(err.response.data.message)
    }
    
}