import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost/connect1.php'
});
export default instance;