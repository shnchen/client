import axios from "axios";
// import qs from 'qs';


const http = axios.create({
  baseURL:'http://api-mysite.com:9999/',
  timeout:10000
})


http.interceptors.response.use((response)=>{
  return response.data
},(error)=>{
  return Promise.reject(error);
})


//注册
export const addUser = (data:{name:string,password:string})=>{
  return http({
    url:'login/registry',
    method:"POST",
    data
  })
}
//登录
export const getDetail = (params:{name:string,password:string}) =>{
  return http({
    url:'login/login',
    method:'GET',
    params
  })
}