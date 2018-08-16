import axios from 'axios'
let base = 'http://localhost:3005' 

export const getHomedata = function (){
    return axios.get(`${base}/data`).then(res => {
        return res.data
    }, err => {
        return Promise.reject(err);
    }).catch((error) => {
        return Promise.reject(error);
    });
}