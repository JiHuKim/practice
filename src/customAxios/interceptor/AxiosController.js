import axios from 'axios';

const instance = axios.create({
    baseURL:"http://localhost:8080/api/",
    timeout:1000
});

//요청직전
instance.interceptors.request.use(
    config => {//성공
        return config;
    },
    err => {//실패
        return Promise.reject(err);
    }
);

//응답직전
instance.interceptors.response.use(
    res => {//성공
        return res.data.data;
    },
    err => {//실패

    }
)

export default instance;