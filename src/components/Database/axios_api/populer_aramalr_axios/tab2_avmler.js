import axios from 'axios';
const instance =  axios.create({
    baseURL: 'http://localhost/tab_avmler_db_api.php'
});
export default instance;