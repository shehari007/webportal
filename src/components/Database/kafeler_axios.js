import axios from 'axios';
const instance =  axios.create({
    baseURL: 'http://localhost/kafeler_api.php'
});
export default instance;