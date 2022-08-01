import axios from 'axios';
const instance =  axios.create({
    baseURL: 'http://localhost/tab_saglik_db_api.php'
});
export default instance;