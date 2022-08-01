import axios from 'axios';
const instance =  axios.create({
    baseURL: 'http://localhost/imgdeneme.php'
});
export default instance;