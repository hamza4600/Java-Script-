
// disscus all coonsole Methods 
// using Console Methods 
function loo(){
console.log("Start The Loop")
console.time()
    for(let i=1;i<=100; i++){
        // console.log(i)
    }
    console.log("Loop have ended Below Time  is in Milli seconds ")
    console.timeEnd()
    console.warn("If we render the Items Then It will Take More Time to complete Loop")
}
// loo();

// CSS in console 
console.log('%cHello world!', 'color: green; font-size: xx-large');

// console.group("hamaz")
// Console.groupCollapase is used to group debugging  

// Object and array 
console.log({ key1: 'val', key2: ['one', 'two'], key3: { a: 1, b: 2 } }); 


// date Object 
const aq=new Date()
console.log(`Date is ` +" "+ aq )

// console.trace(2+5648)
// console.table is mostaly used to output the array and Objects in console 
var person=[
    {
        "Name":"hamza",
        "city":"London",
        "number":"1235478"

    },
    {
        "Name":"hamza",
        "city":"London",
        "number":"1235478"

    },{
        "Name":"hamza",
        "city":"London",
        "number":"1235478"

    },{
        "Name":"hamza",
        "city":"London",
        "number":"1235478"

    },{
        "Name":"hamza",
        "city":"London",
        "number":"1235478",
        "New":"Good Looking"
    },
]
console.table(person)



// >CONSOLE.COUNT()
console.count()
console.count( )
console.count(  )
console.count()
// console.clear() it will clear all console 

// console.dirxml(document); 
// IT WILL GET THE DOCUMET ALL PAGE AND WILL BE ADDED IN THAT 

// It will show the OBjects 
const perso={

    "Name":"hamza",
    "city":"London",
    "number":"1235478",
    "New":"Good Looking"

}
console.dir(perso)

