import axios from 'axios';
const instance =  axios.create({
    baseURL: 'http://localhost/card1_db_api.php'
});
export default instance;