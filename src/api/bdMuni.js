
import axios from 'axios';

const bdMuni = axios.create({
    // Endpoint de CPANEL
    // baseURL: 'https://backend.munipillcomarca.gob.pe/api'

    // Endpoint Local
    // baseURL: 'http://127.0.0.1:8000/api'

    // Endpoint VPS
    // baseURL: 'http://161.132.39.123/api'
    baseURL: 'https://sv-yptplguxwm.cloud.elastika.pe/'
});



export default bdMuni;
