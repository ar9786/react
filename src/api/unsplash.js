import axios from 'axios';
export default axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 7b8e014dc3778315fb41c87776e39b4b109d5e6af1473b68e8266caa0a0504df',
    }
});