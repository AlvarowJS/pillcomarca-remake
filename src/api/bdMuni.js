
import axios from 'axios';

const bdMuni = axios.create({
    baseURL: 'https://backend.munipillcomarca.gob.pe/api'
});



export default bdMuni;
