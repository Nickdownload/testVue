let baseURL;
if(process.env.NODE_ENV==='development'){
  baseURL = 'localhost:3000'
}else{
    baseURL='https://baidu.com'
}

export {baseURL}