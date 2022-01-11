// dISCUSS cvOMPARISON opperators 
// value of true is 1 and false is 0

// == equal on value  === data Type and Value Both are same 

// simple function checK arg is Number 
let chekN=(a,b)=>Number(a)==Number(b);

console.log(chekN(`ha`,`la`)); //false  is Not Number 
console.log(chekN(25,25)); //true  

// check Sane string
let str=(a,b)=>String(a)==String(b);

console.log(`Same String `+str("Hamza","Hamza"))
console.log(str("Hamza","Hazan"))

// Creata New Numbe 
const Nuu=new Number(1025520);
console.log(Nuu)

// NaN is Not a Number  !not eqaul
console.log(NaN===0)
console.log(NaN!==`125`)  //true 

console.log(`Nan  value compare `)
console.log(NaN!==NaN)

//function  comapring The Values 

function Same(x,y){
    if(x===y){
         console.log(`value are sames`)
    }else{
         console.log(`Values are NOT same`)
    }
};
Same(`Hzam`,`Hzam`)
Same(`Ham`,`Hzam`)

// A SIMPLE OBJECT 
const jaj={
    one:`Haazm`,
    two:`Azeem`,
    thre:`SAmeer`,
    four:`Hassan`
} ;
// console.dirxml(jaj) // print ALL values 

// define undefina value or function we wnat 
const val=()=>{
    return console.log(`Value is Undefined`)
}
 
// NULL and UNDEFINED  ar abstract equal not strick equal
console.log(null==undefined) //true
console.log(null===undefined) //false
//null is the absence of value  value is  not defined
//undefined is absence of value 

// ABSTRACT EQUAL COMPARISON
// IF X==Y  compare values only
 /*
 2. If x is null and y is undefined , return true .
3. If x is undefined and y is null , return true .
4. If Type(x) is Number and Type(y) is String , return the result of the comparison x == ToNumber(y) .
5. If Type(x) is String and Type(y) is Number , return the result of the comparison ToNumber(x) == y .
6. If Type(x) is Boolean , return the result of the comparison ToNumber(x) == y .
7. If Type(y) is Boolean , return the result of the comparison x == ToNumber(y) .
8. If Type(x) is either String , Number , or Symbol and Type(y) is Object , return the result of the
comparison x == ToPrimitive(y) .
9. If Type(x) is Object and Type(y) is either String , Number , or Symbol , return the result of the
comparison ToPrimitive(x) == y .
10. Return false .  */

// Have some Examples
console.log(1==`1`)
console.log(1===`1`) //false
console.log(null==undefined)
console.log(null===undefined) //false
console.log(0==false)
console.log(0=="")
console.log(1==`1.000021`)

// LOGICAL operators
//AND &&
//OR || 
// NOT !


//WHEN DOING MATHS js convert Number to string 
 console.log(10+10)  //20
 console.log(10+`10`) //1010  

//  LOGIC OPERTORS WITH BOOLENS VALUES  Mostaly used in Funtiona and conditons 
//OR left to right  if not true then return second value
const qsw=`hamza`||`Hamza`;
console.log(qsw)

var a= 'hello' || ''; 
var b= '' || [];
var c= '' || undefined;
var d= 1 || 5;
var e= 0 || {};
var f= 0 || '' || 5;
var g= '' || 'yay' || 'boo';

// AND  READ values from left to right  if faslse value return other  
var a='hello' && 'empty';
var b='' && [];
var  c=undefined && 0;
var d=1 && 5;
var e=0 && {};
var f='hi' && [] && 'done';
var g='bye' && undefined && 'adios';

console.log(a)

// we can also use them in false statemt are return as default values 
function fafa(vas){
    return vas||`Default values `
}
console.log(fafa()) //because empty default
console.log(fafa([`ha`,`hassan`])) //return string

// STRICJ EQUALITY OPERATRO
// few examples
console.log(`strick equaltiy opertor`);
console.log(1===1);
console.log(1===`1`);
console.log([]===[]); //false
console.log([`hamza`]===[`hamza`]); //false diffetnt memry addreses
console.log(null===undefined); //false
console.log(+0===-0); //true

// ABSTRACT EQUALL OPERANTS only values are same not Data type
console.log(`Abstric equall operant ==`)
console.log( 1==`1`)
console.log( NaN==NaN) //false
console.log( undefined==null) //true
console.log( []==[]) //false

// RELATION OPERANTS  (<=,<,>,>=)
// when Both are Numbers
console.log(`Retation OPerations <=,>,>=`)
console.log(1<2); //true
console.log(1<2);//true
console.log(3>=5);//false
console.log(true< false); //fasle 1<0

//when nOth are strings
console.log(`Both are strings`);
console.log(`hamaz`==`hamaz`) //true
console.log(`a`<`b`)//true
console.log(`x`<`y`)//true
console.log(`10`<`11`)//true

// string and Numbers
console.log(`Strinhs and Numbers`)
console.log(`100`<105) //true js Behaviour


// const 1 > '' //  true 
// const 1 < '' //  false
// const 1 > null //true
// const 1 < null // false
// const 1 > undefined //  false
// const 1 < undefined // false
 

// INEQUALITY OPERATION 
// != IS inverse of ==
console.log(`In eqality operation !=`)
console.log(1 !=2) //true
console.log(1 !=`1`) // false

//similarly !== is inverse of ===
console.log(`Eqaul Inverse ===`)
console.log(1!==1) //false
console.log(`ah`!==`ha`) //true
console.log(1!==`1`) //true

/*
Operator Comparison Example
== Equal i == 0
=== Equal Value and Type i === "5"
!= Not Equal i != 5
!== Not Equal Value or Type i !== 5
> Greater than i > 5
< Less than i < 5
>= Greater than or equal i >= 5
<= Less than or equal i <= 5
*/

// grouping more complex  Logical operations to ame decisions on functions
function ages(agx,hee){
    const age=parseFloat(agx);
    const height=parseFloat(hee)
    if((age>=18 && height>=5.5)||(statu===`royality`&&havsInvested)){
        console.log(`You can Now Join The club`)
    }
} // basic complex exaple 

// we can also used arrray put true or False in it asnd use them as we want 
 
