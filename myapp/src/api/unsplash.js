import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 48266952ea286cfc191992aa779f31357a98693453d8ab69ca4152b9f6f81d66'
    }
});