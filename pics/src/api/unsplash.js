import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID a4NIvUZDeLsiGtwObgAd9CFJiSIWkC0QLrwaozIgCww' }
});