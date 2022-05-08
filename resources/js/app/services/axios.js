import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'https://lareact-test.herokuapp.com/api/v1',
    // baseURL: 'http://lareact.damian/api/v1',
    withCredentials: true,
});
export default apiClient;