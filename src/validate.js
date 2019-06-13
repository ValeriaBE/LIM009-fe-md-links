import fetch from 'node-fetch';

export const validateArr = (arr) =>{
   const arrPromises = arr.map(obj => {
        return fetch(obj.href)
        .then(res => {
           if(res.status>=200 && res.status<400){
            obj.status = res.status
            obj.ok = res.statusText
            return obj
           }else{
            obj.status = res.status
            obj.ok ='fail';
            return obj;
           }
       });
    })
    return Promise.all(arrPromises)
   }
