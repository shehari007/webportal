import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost/ppdb.php'
});
export default instance;