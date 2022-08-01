import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost/yasal_uyari_api.php'
});
export default instance;