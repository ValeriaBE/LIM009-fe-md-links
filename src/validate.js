import fetch from 'node-fetch';

export const validateArr = (arr) =>{
   const arrPromises = arr.map(obj => {
        return fetch(obj.href)
        .then(res => {
            obj.status = res.status
            obj.ok = res.statusText
            return obj
       });
    })
    return Promise.all(arrPromises)
   }
