import React from 'react';
import ReactDOM from 'react-dom';
import './css/common.css';
import './css/signUp.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AxiosInterceptors from './AxiosSetting/interceptor/AxiosInterceptors';
import AxiosDefultsSetting from './AxiosSetting/defaultSetting/AxiosDefultsSetting';

AxiosDefultsSetting();
AxiosInterceptors();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
