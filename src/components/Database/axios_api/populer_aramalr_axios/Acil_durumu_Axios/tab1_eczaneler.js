import axios from 'axios';
const instance =  axios.create({
    baseURL: 'http://localhost/tab_eczaneler_api.php'
});
export default instance;