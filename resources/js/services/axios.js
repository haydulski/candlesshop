import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'http://lareact.damian/api/v1',
    withCredentials: true,
});
export default apiClient;