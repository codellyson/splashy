import axios from "axios";
axios.defaults.baseURL ="https://api.unsplash.com";
axios.defaults.timeout = '0';
axios.defaults.headers.get['Accept'] = 'application/json'; 
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.get['Access-Control-Allow-Origin']='*'
axios.defaults.headers.common["Authorization"] =`Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`