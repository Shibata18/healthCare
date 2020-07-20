import api from '../../../services/api';
import config from "../../../config.json";
const idAgenda = localStorage.getItem('idAgenda');
let credential = {
    apiKey: '',
    sessionId:"",
    token:"",
}
let response = function(){return api.get(`/agenda/${idAgenda}/session`).then(response=>response.data)}

let pendingPromise = response()
console.log(pendingPromise) // Promise { <pending> }

pendingPromise.then(function(result) {
  console.log(result);
 
})
credential.apiKey =config.apiKey;
export default {
    credential
}