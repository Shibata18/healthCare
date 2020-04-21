import axios from 'axios';
import { LOGIN_DOCTORS,LOGOUT_DOCTORS,AUTH_DOCTORS,REGISTER_DOCTORS} from './types';
import { DOCTOR_SERVER } from '../components/Config.js';

export function registerDoctor(dataToSubmit){
    const request = axios.post(`${DOCTOR_SERVER}/doctor`,dataToSubmit)
        .then(response => response.data);

    return {
        type: REGISTER_DOCTORS,
        payload: request
    }
}

export function updateDoctors(id,dataToSubmit){
    const request = axios.put(`${DOCTOR_SERVER}/doctor/:${id}`,dataToSubmit)
        .then(response => response.data);

    return {
        type: REGISTER_DOCTORS,
        payload: request
    }
}

export function loginDoctors(dataToSubmit){
    const request = axios.post(`${DOCTOR_SERVER}/login`,dataToSubmit)
                .then(response => response.data);

    return {
        type: LOGIN_DOCTORS,
        payload: request
    }
}

export function authDoctors(){
    const request = axios.get(`${DOCTOR_SERVER}/authDoc`)
    .then(response => response.data);

    return {
        type: AUTH_DOCTORS,
        payload: request
    }
}

export function logoutDoctors(){
    const request = axios.get(`${DOCTOR_SERVER}/logout`)
    .then(response => response.data);

    return {
        type: LOGOUT_DOCTORS,
        payload: request
    }
}
