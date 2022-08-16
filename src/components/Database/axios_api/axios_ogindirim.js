import axios from 'axios';
const instance =  axios.create({
    baseURL: 'http://localhost/og_indirim_api.php'
});
export default instance;