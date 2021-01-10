import axios from 'axios'
const instance = axios.create();
instance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    const {data:{data},status} =response
    return {
        data,
        status
    };
  }, function (error) {
   
    return Promise.reject(error);
  });
function request(options){
   return instance(options)  
}

export default request