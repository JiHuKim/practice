import axios from "axios";

const AxiosDefultsSetting = () => {
    const baseURL = "http://localhost:8080/api/";

    axios.defaults.baseURL = baseURL;

}

export default AxiosDefultsSetting;