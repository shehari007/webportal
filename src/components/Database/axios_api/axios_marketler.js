import axios from 'axios';
const instance =  axios.create({
    baseURL: 'http://localhost/marketler_api.php'
});
export default instance;