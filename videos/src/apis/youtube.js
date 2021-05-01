import axios from 'axios';


const KEY = 'AIzaSyARP6uiez1FTBfTck7uWcfupOQ1yxG6w_c';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});