import axios from './axios.js';

// 登录
export const userLogin = async (params) => {
    return await axios.post('/user/login', params);
};

// 注册
export const userRegister = async (params) => {
    return await axios.post('/user/register', params);
};