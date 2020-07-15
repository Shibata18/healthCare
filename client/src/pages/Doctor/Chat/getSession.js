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
  result.map(sessio=>credential.sessionId= sessio.session)
  result.map(session=>{return credential.token =session.token})
})
credential.apiKey =config.apiKey;
console.log(credential);
export default {
    credential
}