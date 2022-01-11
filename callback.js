// a simple call Back in js
// it extent the functionality of function  without chnaging  code 

function Arr(arr){
    let sun =0;
    for(let i=0; i<arr.length; i++){
        sun+=arr[i]
    }
    return console.log(`sunm of array is `+sun)
    
}// return sum of arry numbers
const hg=[1,2,3,4,5,6,7,8,9,100]
Arr(hg);

// adding call back in it 
const gaga=(x)=>{
    console.log(x)
}
function arrCal(arr,callback) {
    
    for(let y=0;y<5; y++){
        callback
        console.table(`Print The call back`)
    }
} // callback is function now we can chane the function sing call back  
// arrCal(hg,gaga())


// defined a call back and run a function
async function   doOne  (then){
    await console.log(`Call Main Body`)
     await setTimeout(() => {
         console.log("1 sec Time passed")
    }, 1000);
    await then()
} //main 
doOne( function(){ //pass as call back
     console.log(`Call Back passed`)
})    //main func first the call Back

//callback as a last instruction in a function  can have more than One callBack
//arrow function autmatically bind this key word
function Kio (msg,elm){
    this.msg=msg;
    elm.addEventListener(`click`,()=>{
        console.log(this.msg)
    })
}

//error Haandeling in call back
function Compare(actual,success,fail){
    const expected=true;
    if(actual===expected){
        success()
    }else{
        fail()
    }
};
function onsucc(){
    console.log(`Succes have done`)
};
function Faill() {
    console.log( `Ypu have to try again`)
};
Compare(true,onsucc,Faill)
Compare(false,onsucc,Faill)

// Interval and setTimeout function 
//recursion
function Repeat(){
    // console.log(`seems I sec have passed`);
 
    setTimeout(Repeat, 1000);
};
// setTimeout(Repeat,1000)

     
    setInterval(() => {
        let a=1
        console.log((a)=>{a+a+1})

    }, 2000);


// clear interval and clearTimeOut()
