/*Functions in JavaScript provide organized, reusable code to perform a set of actions. Functions simplify the coding
process, prevent redundant logic, and make code easier to follow. This topic describes the declaration and utilization of functions, arguments, parameters, return statements and scope in JavaScript.*/

//Nested Functions are also Possibel in side  function 
// varibels  in js are access as Scope if  don,t find it it will move to higher scoper if not them through error

// Currying is the transformation of a function of n arity or arguments into a sequence of n functions taking only one argumnet 
var prism = function(l, w, h) {
    return l * w * h;
} // 

//Immediat Invoke Funtions or annonymous functions 
// we can also say they self exicution anonimous functions  they  have access to surrounding Scope  But will be inaccessible from outside
var example = (function() {
    return 42;
    }());
    console.log(example); // => 42

    //ARROW functions or inLine 
    (() => console.log("Hello!"))(); // => Hello!

    //Name funtion and pass arguments in it
    //recursion apply on name functions easily

    //define functions in ObJECTS
const moni={
    number:10,
    check:function(val){
        if(val>this.number){
            console.log(`Value is To High  try  LLoo Value`)
        } else{
            console.log(`Value is in Field`)
        }
    }
}    
// console.log(moni.check(5))
// console.log(moni.check(50)) 

//Bind Operator ::

// var log = logToServer ? logger.log : console.log.bind(console);

//  Function take unknown Number of argumenta
function UnKnown(){
    for(let o=0;o<=arguments.length; ++o){
        console.log(arguments[o])
    }
    console.log(`Argumnet Printed `)
}// write long arrgumnets
UnKnown(`Hello Hamza Kahha bx sxbsk cnfd cm ddnw sjdcsj cbebjcb scsd xks xj,s xjsbxhjs`)


// we can also pass in to array and desturcture it 
function Darr(...arg){
    arg.forEach(aa=>{
        console.log(`   `+ arg)
    })
}
Darr(`Hello Hamza Kahha bx sxbsk cnfd cm ddnw sjdcsj cbebjcb scsd xks xj,s xjsbxhjs`)
// Both are doing same work 

//Anonomus functions are mostaly used as Callback
function getHashFunction( algorithm ){
    if ( algorithm === 'sha1' ) return function( value ){ /*...*/ };
    else if ( algorithm === 'md5' ) return function( value ){ /*...*/ };
}

// we can also name a annonimus function used for recursion and conditions

//A NEW WAY OF WRITTING THE default parameter to a function 
function namex(params=`\nThis is Custom and default Value insted of undefined`) {
    console.log(params)
};
namex();
//for inLine as
let param_check = (p = 'str') => console.log(p + ' is of type: ' + typeof p);

// wecan also use a callback function or defina function that can be used as default as a parameter
function foo(callback = function(){ console.log('Custom  default Argumnet'); }) {
    callback();
    }
    foo(function (){
    console.log('custom');
    });
    // custom
    foo();
    //default

    // we can most of data in the paramnetr of function to get the result

    const zero = 0;
function multiply(x) { return x * 2;}
function add(a = 1 + zero, b = a, c = b + a, d = multiply(c)) {
    console.log((a + b + c), d);
}
add(1, 2, 5, 10); //8 10

//simle but usefull
function Mean(vale,array=[]) {
    array.push(vale)
    return console.log(vale)
};

Mean(`x jsxs xsxsxks xksn mbkll23o;lhe 3olk34k`);


// call back and applay;
// we can use set and applay in the Object to chnage the VALUES we wantl;
const kaka={

    a:"Hamza",
    b:"Hassan",
    set: function(a,b){
        this.a=a;
        this.b=b;
    }
};
console.table(kaka) // Now change the values 
kaka.set("Karachi","Lahore");
// console.table(kaka) // change value will appper

// we cab reduce the number of argumnet pass in a function as that argumnets pas in a infunction appl Logic on them then  perfom opertion and return 

//passing Agumnet by reference  or value 
const kj={
    l:"Lahore"
};
function Chnage(obj){
    obj.l= 'Lahore to Londom'
    obj.k= 'Londom to New York'
};
Chnage(kj) //pass VALue as a argumnet  chnage the orignal property and apply new one  can also add more valies
console.table((kj))
// in above example function did,nt chnage the orignal value but add new Object will function define propties 

// we can also copy and add more Logic we wanted 


//      ARGUMNET pass in a function can be aray  or Object  we can check (typeof argumnet)  and used Rest and spread Operators in It 
 // we can also add more function in a function and pass Parameter  in Those functions  as require result function calling different functions 

 // recursive function a factorial 
 function factor(pa) {
    if(pa<=1){
        return 1
    }
    return pa*factor(pa-1)
 };
//  console.log(`Recusrion  `+factor(5))

//Recusrsion can also cause stackOverflow or infine Loop condition must be define
function countEvenNumbers (arr) {
    // Sentinel value. Recursion stops on empty array.
    if (arr.length < 1) {
    return 0;
    }
    // The shift() method removes the first element from an array
    // and returns that element. This method changes the length of the array.
    var value = arr.shift();
    // `value % 2 === 0` tests if the number is even or odd
    // If it's even we add one to the result of counting the remainder of
    // the array. If it's odd, we add zero to it.
    return ((value % 2 === 0) ? 1 : 0) + countEvenNumbers(arr);
};

const df=[1,2,4,5,6,7,8,9,10]
// console.log(countEvenNumbers( df )) ///pas a array of number will return number of Even Numbers


//      RETURN statment
// .push. it end the function and five output from a function  we can also return aObject or multiple Lines from a function

//      REFERNCE 
// functions can also be asign to varible that function return a statment we can use it as condition or ===  purpose
function Second(){
var hashAlgorithm = 'sha1';
var hash;
if ( hashAlgorithm === 'sha1' ) hash = function(value){ /*...*/ };
else if ( hashAlgorithm === 'md5' ) hash = function(value){ /*...*/ };
hash('Fred');

// it can also br written as 
var hashAlgorithm = 'sha1';
var hash;
if ( hashAlgorithm === 'sha1' ) hash = sha1Hash;
else if ( hashAlgorithm === 'md5' ) hash = md5Hash;
hash('Fred');
function md5Hash(value){
// ...
}
function sha1Hash(value){
// ...
}};

// it can also be written as OBject type we want as 
function ThreeObject(){
    var hashAlgorithms = {
        sha1: function(value) { /**/ },
        md5: function(value) { /**/ }
        };
        var hashAlgorithm = 'sha1';
        var hash;
        if ( hashAlgorithm === 'sha1' ) hash = hashAlgorithms.sha1;
        else if ( hashAlgorithm === 'md5' ) hash = hashAlgorithms.md5;
        hash('Fred');
};

// we can also assign a reference to a function help by variblesthis can be and invoke other functoions
function reference(){
    const a=getVale();
    b=a;
    c=b();
    function getVale(){
        return console.log(`refence to one and another`)
    }
};  // it is like a Object value

