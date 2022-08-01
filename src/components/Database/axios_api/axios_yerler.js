import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost/yerler_api.php'
});
export default instance;