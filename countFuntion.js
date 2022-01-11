// Constructor function  used for makeing new Objects  this refer to new created Object

function Cat(name,one,too,three,four){
    this.name=name;
    this.too=too;
    this.one=one;
    this.three=three;
    this.four=four;
    this.sound=`MMeeAA meoo `
};
let popi=new Cat("Tom",`Haeavy`,`Beauti`,`Eating`,`Pakistan`);
// console.log(popi)  // created an Object 

//DECLEARING AND mODYFING tHE vALUE     const is used to do  in const declear and insilize at same time
//let   can be re-assign again  a block scope  varible
// const a block scope and cannot be re-assign
// var create a function scope varible
// b+=a  means b= a+b  same for all operations

//      LOOPs 

function Lo(){
    for(let i=0; i<50; i+=5 ){
        console.table(i)
    }
};
// Lo()
 // for in loop is used to itterate through a Object and Array
 // forEach()  work better with  break and countine and return 

 function LopO(){
     for(o in popi){
         console.log(o)
     }
 };
//  LopO()
//Set() will elemnate the duplications in an aray  
// const uniqueNames = new Set(names);

//for of loop for Obejct work better in such a way
function Poll(){
    for(let y of Object.keys(popi)){
        console.table(y+ `  :: `+  popi[y])
    }
};
// Poll()

//for in is discourage in array beacuse cant access index

//      WHILE loop and  do while loop do at firat then check the condition define 

//  break and countinue statement in Loop on the conditions we want to stop or countinue a Loop

function MulLo(){
    const ll=[]
    for(let i =1; i<=10; i+=2){
       ll.push(i)
        for(let j=1; j<=20; j+=3){
            ll.push(j)
        }
    }
    console.log(ll)
};
// MulLo()