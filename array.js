// discus array  are like an Object have several Methods data and Propsrties 
const arr=['1',1,2,3,4,5,10];
// console.table(arr)
// Or may Like  
const aqq={
    1 : 'Hazma',
    2 : 'Hassan',
    3 : 'SAmeer',
    4 : 'Ameer',
    5 : 'ALi baba'
};
// console.table(aqq)
// console.dir(aqq)

// ..COMMAN EXAMPLES OF ARRAY ARE document.GetElementTagName =[]

// differnce Between between Array and array Object are That we can,t apply array Function on a array Object  like Pull push() , Pop()  etc;;

// To convert array like Object in array are as 
//Array.from: 

function gaga(qq){
const axx=Array.from(qq)
axx.forEach(element => {
    console.log(element)
})
};

// second method
//  get all items of array  
function ArrOut(){
    const arro=[];
    for(let oi of arr){
        arro.push(oi)
    }
    console.log(arro)
};
ArrOut();

//THIRED METHOD; for array like Object get vlaues 
function Thrd(sw){
    const ew=Object
    .keys(sw)
    .map((val)=>sw[val]);
    return (ew)
} //apass array as a Argumnet
console.log(Thrd(aqq))

const final=Thrd(aqq).indexOf(`ALi`); //give index value 
console.log(final)


//FOR eACH IN array
var arrayLike = {
    0: 'Value Pakistan',
    1: 'Value India',
    length: 2
    };
[].forEach.bind(arrayLike)(function(val){
    console.log(val)
})    //bind add to the array and function pass argumnet manuplate them as needed

//      REDUCER APPLY function on all itemon arrray from left to right
numm=[1,2,3,4,5,6,7,8,9,100]

// function reducer(ss){
//     const qw=[ss]
//     qw[0].reduce(function(a,b){
//         return a+b
//     })
// };
//simple function that take an array and Double the value of ITems
function MuAr(ds){
    let num=[parseFloat(ds)];
    for(let i=0; i<=ds.length; i++){
        console.table(ds[i]*2)
        num.push(ds[i]+10)       
    }

    return console.log(num)
}
// MuAr(numm)

//Reducer function also  fo something Like that
console.log(`Reduce Functions is runing`);
// [1,2,4].reduce(function(a,b){
//     return console.log(a+b)
// },2)``;


//FLAT ARRAY OF OBJECT
let FlatA=[ {
    key: `Hzam`,
    value: 1
},{
    key: `Hzam`,
    value: 1
},{
    key: `Hzam`,
    value: 1
},{
    key: `Hzam`,
    value: 1
},{
    key: `Hzam`,
    value: 1
},{
    key: `Hzam`,
    value: 1
}
];//Object 
console.dirxml(FlatA)
const sw= FlatA.reduce((obj,curnt)=>(
    {...obj,[curnt.key]: curnt.value}));
// console.log(sw) //return key and Value 

//  find the Maximum value and Minimaum value in array
const ded=[5,1,100,-50,-2]; //comapre all item 
const po= ded.reduce(function(a,b){
    return a<b? a : b
},Infinity)
// console.log(po)

// function return lowest value from a array 
function Hagg (aww){
    const arra=[aww];
    const two=(arra[0]);
    const xsx=two.reduce(function(a,b){
        return a<b?a:b  //by changing Value we can also get the Greatest Value
    })
    const xsz=two.reduce(function(a,b){
        return a<b?b:a  //by changing Value we can also get the Greatest Value
    })
//    console.table(arra[0])
   console.table(`Lowest NUmber is == `+xsx)
   console.table(`Greatest NUmber is == `+xsz)
}
// Hagg(ded)

// MAPPING VALUES    can return Value array and Index Value of array
const Alpa=[`one`,'two',`three`].map(value=>value.length +value);
// console.log(Alpa) //return the lenght of each word

// SIMAPLE INLINE FUNCTIONS THAT RETURN THAT ODD NUMBERS
const ods=(lo)=>[lo][0].filter(n=>n%2!==0);
const even=(lo)=>[lo][0].filter(n=>n%2===0);
const dds=[10,2,3,85,45,17] 
const ddx=[11,20,3,87,450,317] 
console.log(`Odd Numbers are `+ods( dds))
console.log(`Odd Numbers are `+even( dds))
console.log(`Odd Numbers are `+ods( ddx))
console.log(`Odd Numbers are `+even( ddx))


//it also work in an Object But first amke an array
const people = [{
    id: 1,
    name: "John",
    age: 28
    }, {
    id: 2,
    name: "Jane",
    age: 31
    }, {
    id: 3,
    name: "Peter",
    age: 55
    }];
let young=people.filter(person=>person.age<35);
console.table(young) //return age lesss than 35

//return the tetx j match in Person
let youngx = people.filter((obj) => {
    var flag = false;
    Object.values(obj).forEach((val) => {
    if(String(val).indexOf("J") > -1) {
    flag = true;
    return;
    }
    });
    if(flag) return obj;
});
console.log(`Name Matches with J :`)
console.table(youngx)

//sort()  is used to sort the item in array arrange in Order
// WE CAN ALSO APPLY CALLBACK FUNCTION APPLY OUR OWN LOGIC AS WE WANT ACCORDING TO SORTING ARRANGING
const pee=[1,9,30,4,"a",50,6,7,8,"h","z",90].sort()
// console.log(pee)
function Co(aa){
    return console.table(aa)
};

const tyt=[`hamza`,`hassaan`,`ali`].sort();
Co(tyt)   //arange in alpabetically order

//Number sorting
const Nuu=[15,45,100,679,10].sort(function(a,b){
    return a-b
})
Co(Nuu)   //don,t work on Number well

//sort according to index Value 
let anii= ["zebras", "dogs", "elephants", "penguins"]
const cd= anii.sort(function(a,b){
    return a.length-b.length
});
Co(cd) //arrange short firts



//remaining is in arrayTwo.js





