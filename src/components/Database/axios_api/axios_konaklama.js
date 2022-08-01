import axios from 'axios';
const instance =  axios.create({
    baseURL: 'http://localhost/konaklama_api.php'
});
export default instance;