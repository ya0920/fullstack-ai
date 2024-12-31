import axios from 'axios';
import { showSuccessToast, showFailToast } from 'vant';
import router from '@/router/index';

axios.defaults.baseURL = 'http://121.43.166.28:7009'; // 此处填写后端接口地址,方便修改地址
axios.defaults.withCredentials = true; // 允许携带 cookie
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'; // 设置请求头
axios.defaults.headers['Authorization'] = 'xxxxxx'; // 将一个能证明身份的东西放在请求头中
axios.defaults.headers.post['Content-Type'] = 'application/json'; // 设置post请求头(要JSON格式)


// 响应拦截器(该项目中每一个请求发出去后,后端发回来的响应都会先走这里)
axios.interceptors.response.use((res) => {
    //每个接口的错误情况统一处理
    if (typeof (res.data) !== 'object') {
        showFailToast('服务器异常！请稍后再试');
        return Promise.reject(res); // 返回一个失败的Promise,让后面的catch捕获,方便调试
    }
    if (res.data.code !== 200) { // 200是后端返回的成功状态码
        if (res.data.msg) showFailToast(res.data.msg);
        if (res.data.code === 401) { // 401是后端返回的未登录状态码,未登录则跳转到登录页
            router.push('/login');
        }
        return Promise.reject(res);
    }

    return res.data
})

export default axios;