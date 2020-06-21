import axios from 'axios'
const host = process.env.NODE_ENV === 'production' ? window.location.host : 'localhost:3333'
const url = axios.create({
  baseURL:`http://${host}`
})
export default url;
