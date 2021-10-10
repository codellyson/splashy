import axios from "axios";
const {REACT_APP_UNSPLASH_ACCESS_KEY} = process.env
axios.defaults.baseURL ="https://api.unsplash.com";
axios.defaults.timeout = '0';
axios.defaults.headers.get['Accept'] = 'application/json'; 
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.get['Access-Control-Allow-Origin']='*'
axios.defaults.headers.common["Authorization"] =`Client-ID ${REACT_APP_UNSPLASH_ACCESS_KEY}`