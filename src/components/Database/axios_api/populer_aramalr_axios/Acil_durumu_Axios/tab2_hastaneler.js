import axios from 'axios';
const instance =  axios.create({
    baseURL: 'http://localhost/hastanesi_tab_api.php'
});
export default instance;