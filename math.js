// dicusee basic of Math Module that id pre -define in Ja/S

//MODULES return  Remainder of a number
console.log(45%7) // 3 remainder

//is even x%2==0  
function even(s){
    console.log(`only ente Number`)
    const n=parseInt(s)
        if(n%2==0){
            console.log(`${n} it is Event Number\n`)
        }else{
            console.log(`${n } is odd number\n` )}
}
// even(10)
// even(17)

//is odd x%2!=0

//   DECIMAL PLACES
//Math.round(num) riund Number to close Number 3.7 = 4
//.ceil() round up to Number 
//.floor() round  down  to Number 

//      TRIGNOMATRY
const r=Math.PI;
console.log(Math.cos(0)) //1\
console.log(0b0001)

/*      INCREMENTAL OPERATORS
    a++     If used as a postfix, then it returns the value before incrementing.
   ++b     If used as a prefix, then it returns the value after incrementing.*/


   //math.pow(a,b) 
   //random Number as
//    console.log(Math.random())
function Randd(a,b){
    return Math.floor(Math.random()*(b-a+1))+a
};
console.log(`random Number is as  `+Randd(1,5)) // 5 wil also be 

//Big ending of array using Bitwise Operator
 const buf= new ArrayBuffer(10);
 const buf4=new Uint8ClampedArray(buf);
//  console.log(buf4)
let datx= new Uint32Array();
//  console.log(datx)

var isLittleEndian = true;
(()=>{
var buf = new ArrayBuffer(4);
var buf8 = new Uint8ClampedArray(buf);
 
var data = new Uint32Array(buf);
data[0] = 0x0F000000;
if(buf8[0] === 0x0f){
isLittleEndian = false;
}
})();
//  console.log( isLittleEndian)

//Math.min(...aa) min  number return sane for max

// decrement operator -- used in Loop  for (var i = 42; i > 0; --i) {comman Use}

// BITwise Operations  & , | , ~  and will add two Numbers 
// console.log(2&5)

// Real world example of Bit manuplation without extra memory allocation
let a =10 , b=20;  //declear multiple varible in  a single line
a=a^b
// console.log(a)

// Bitwise shifting can be thought as "moving" the bits either left or right, and hence changing the value of the data operated on
// << left shift operator  new will come in form the right 
console.log(`Bit shifting`)
// console.log(5<<10)

//right shifting >> sign propertion right sift
console.log(20>>2)

console.log(5<<2)
//Zero-fill Right shift >>>move toward right  new bit will be 0 