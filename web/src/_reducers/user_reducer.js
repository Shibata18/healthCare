import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    LOGIN_DOCTORS,
    REGISTER_DOCTORS,
    LOGOUT_DOCTORS,
    AUTH_DOCTORS,
} from '../_actions/types';


export default function(state={},action){
    switch(action.type){
        case REGISTER_USER:
            return {...state, register: action.payload }
        case LOGIN_USER:
            return { ...state, loginSucces: action.payload }
        case AUTH_USER:
            return {...state, userData: action.payload }
        case LOGOUT_USER:
            return {...state }
        case REGISTER_DOCTORS:
            return {...state, registerDoctor: action.payload }
        case LOGIN_DOCTORS:
            return { ...state, loginSuccesDoctor: action.payload }
        case AUTH_DOCTORS:
            return {...state, doctorData: action.payload }
        case LOGOUT_DOCTORS:
            return {...state }
        default:
            return state;
    }
}
