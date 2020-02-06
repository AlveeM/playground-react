import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bbdc7cf080175f94416ea95e058220d9183af7c535337d48137cf651ca04a125'
    }
});