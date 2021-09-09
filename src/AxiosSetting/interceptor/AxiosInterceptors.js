import axios from 'axios';

const AxiosInterceptors = () => {
    // axios.create({
    //     baseURL:"http://localhost:8080/api/",
    //     timeout:1000
    // });

    //요청직전
    axios.interceptors.request.use(
        config => {//성공
            console.log("interceptor req ok");
            return config;
        },
        err => {//실패
            return Promise.reject(err);
        }
    );
    
    //응답직전
    axios.interceptors.response.use(
        res => {//성공
            console.log("interceptor res ok")
            return res;
        },
        err => {//실패
    
        }
    )
}


export default AxiosInterceptors;