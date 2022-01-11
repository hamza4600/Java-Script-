// promises in js are asyn functions that do a TASK  AND  RESPONE
//Basic Promise 
const promise = new Promise((resolve,reject)=>{
    // a asyn function api call
    if(value){ //success
        resolve(value)
    }else{
        // somthing went wrong
        //this isnot required
        let reson= new Error(message);
        reject(reson);
        throw reson
    }
})
//then and catch can also be used 
promise.then(value=>{
    //promise completed
}).catch(reson=>{
    //promise rejected
})

//we can also used finally () is used to cleanup to stop fetchinf data
function Clean(url){
    let loadind=true
    fetch(`${url}`)
    .then(result=>(result.date))
    .catch(erro=>console.log(erro))
    .finally(()=>{
        loadind= false
    })
}//finally should not affect state and promise
