import axios from 'axios';
const instance =  axios.create({
    baseURL: 'http://localhost/acil_durumu_db_api.php'
});
export default instance;