//axios ka instace banao
import axios from 'axios';

const axiosInstance = axios.create({   
    baseURL: 'http://localhost:3000', // Set the base URL for all requests 
    timeout: 10000, // Set a timeout for requests (optional)
    withCredentials: true, // Include credentials with requests (optional)
});
export default axiosInstance;