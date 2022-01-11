// discuss Obejct in js  SAVE data as Key Value property 
const existing = { a: 1, b: 2, c: 3 };
console.dirxml(existing)

//clone an Object or copy of an Object 
const {...copy}=existing;
// console.log(copy)

// freeze()  freez the Object that we can,t add delete or remove new porperties in The Object
var obj = {
    foo: 'foo',
    bar: [1, 2, 3],
    baz: {
    foo: 'nested-foo'
    }
    };
    Object.freeze(obj); // we have freeze the Object  no changes

    console.log(delete(obj.foo)) //falses chnat chnaget the Obejct Items //push()

    //after a copy make to parent will not afect to the copy Object 
    const cpy={...obj}=obj;
    // const spt=JSON.stringify(cpy); //convert to String Object
    // console.dir(spt)

    //deep clone an Object
function deepClone(obj) {
    function clone(obj, traversedObjects) {
        var copy;
        // primitive types
        if(obj === null || typeof obj !== "object") {
        return obj;
        }
        // detect cycles
        for(var i = 0; i < traversedObjects.length; i++) {
        if(traversedObjects[i] === obj) {
        throw new Error("Cannot clone circular object.");
        }
        }
        // dates
        if(obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
        }
        // arrays
        if(obj instanceof Array) {
        copy = [];
        for(var i = 0; i < obj.length; i++) {
        copy.push(clone(obj[i], traversedObjects.concat(obj)));
        }
        return copy;
        }
        // simple objects
        if(obj instanceof Object) {
        copy = {};
        for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
        copy[key] = clone(obj[key], traversedObjects.concat(obj));
        }
        }
        return copy;
        }
        throw new Error("Not a cloneable object.");
        }
        return clone(obj, []);        }
        
//we can also use for in Loop and map() ti itterate the Object Key and Values 
function Pol(){
    for(i in existing){
        console.log(`Keys : `+ i )
    }
}         
Pol() //return the keys Of Object


//map( key index value )
Object.keys(existing).map(function(key,d){
    console.log(key +d)
})

//assign() is used to copy the key and Values of one Object to another we can also add multiplle Obejcct to a single Object
const user={
    name :`hamza`
}
Object.assign(user,{last : "Kahnz", age: 25});
// console.log(user) // value ahve be added to the Obejct
// 
var obj1 = {
    a: 1
    };
    var obj2 = {
    b: 2
    };
    var obj3 = {
    c: 3
};
const Mult= Object.assign(user,obj1,obj2,obj3);
// console.table(Mult) //values ahve been  added to the One 

//we can also merge two Objects with each Other using spread/rest Operator
const aa={...user,a:"Karachi"};
// console.log(aa)  

// . method is used to get the value of Object we want'

//GET and SET in Object 
//GET properties is used to get the value of Object;
//SET properties is used to set the new Values we want 

let Objj={
    a: "hamza",
    b:"Khan",
    c:"hassan",
    d:"sameerr",
    get: function full(){
        return this.a +" "+ this.b
    },
    set: function set(value){
        // [this.a]=value
        console.log(value)
    }
}
// console.log(Objj.get())
// console.log(Objj.setA("lk"))

// we can also define Functions as we want

 //we can ahve array in Object then toitterat from taht arry we can us C like loop

 Objj.place='Lahore'
//  console.log(Objj.place)  //added new proprt 

//show values in an Object
let yoyo=Object.keys(Objj)
    .map(function(key){
        return Objj[key]
    });

// console.log(yoyo)

//using for in loop
let ayay=()=>{
    const pl=[]
    console.log(`Value are \n`)
    for(q in Objj){
         pl.push(q)
    }
    console.log(pl)
}
// ayay() //all keys ahve been added in an array

//a SIMPLE METHOD TO DO IS Object,keys(name) of Obejct we want to get the properties
// console.table(Object.keys(Objj))  // keys 
// console.table(Object.values(Objj))  // values

// we can also lock the property of an a Obejct it cn be only Read

// const Kjk={}
// Object.defineProperty(Kjk, "foo", {
//     value: "original value",
//     writable: false,
//     configurable: false
//     });
//     Object.defineProperty(Kjk, "foo", {writable: true});
// console.log(foo)


// Have adeep dive into  the Object inside 

var obj = {propertyName1: 1}; //the pair is actually ('propertyName1', {value:1,
// writable:true,
// enumerable:true,
// configurable:true})
Object.defineProperty(obj, 'propertyName2', {get: function() {
console.log('this will be logged ' +
'every time propertyName2 is accessed to get its value');
},
set: function() {
console.log('and this will be logged ' +
'every time propertyName2\'s value is tried to be set')
//will be treated like it has enumerable:false, configurable:false
}});
//propertyName1 is the name of obj's data property
//and propertyName2 is the name of its accessor property
obj.propertyName2 = 3; //and this will be logged every time propertyName2's value is tried to be set
console.log(obj.propertyName2); //this will be logged every time propertyName2 is accessed to get value


//entiers() retrn array of key and Value 


console.table(Object.entries(Objj))


// get att key and Values 
function Full(Oo){
for(const [key, value] of Object.entries(Oo)) {
    console.table(key+`  ${(value)}`); // "one", "two" and "three"
; // 1, 2 and 3
}}
// Full(Objj)

// 

