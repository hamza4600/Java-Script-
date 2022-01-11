// array spreads
//spread Item in an arary
const aa=[1,2,3,4,5,6,...[7,8,9,10]];
// console.log(aa)


//we have to use spread opetors before we map()
const ab=[1,2,3,4,5,6,[...`78910`].map(x=>parseInt(x))];
// console.log(ab)

// REST OPERATOR it bind several item in singal one 
const [a,b,...rest]=[1,2,3,4,56,7,8,9,10];
// console.table(rest) //all except 1 and 2
// function it wb like
function Spre(ss){
    const [a,b,...rest]=ss
    console.log(`Rest Value is `)
    console.table(rest)
    console.log(`1 and 2 value : ${a} and ${b}` )
};
// Spre(aa)


//FILTER  rerun a filter array
// console.table(aa.filter(bb=>bb>5))  //value greate than 5

//FILTER text
const text= `Since Boolean is a H native javascript function/constructor that takes [one
    optional parameter] and the filter method also takes a function and passes it the current array
    item as a Hamza parameter, you could read it like the following`;
//defina  function  take an array an return the letter with samll a;

function Lett(arr){
    if(arr&&arr[0].toLowerCase()==="a"){
        return true
    }
    return false
};
const dfd=text.split("")
const letterA = dfd.filter(Lett)
// console.table(letterA + "\nNumber of a are " + letterA.length)




//SEARCHING ITEM IN AN ARRAY
function Searh(){
    let yy="";
    let gf=[...text]
    for(let l=0; l<dfd.length; l++ ){
        if(gf[l]==="H"){
            yy=gf[l]
            console.log(yy)
            console.log(`Value have  Found`)
            break
        }
        console.table(gf[l])
    }
    console.log(`Loop Have ended`)
} 
// Searh()
const tex=[
    {name:'Hassna'},
    {name:'Hamza'},
    {name:'Ali Bab'}
]
let bob = tex.find(person => person.name === "Hamza");
let bobx = tex.findIndex(person => person.name === "Hamza");
// console.log(bob)
// console.log(bobx) // index value 

//findIndex() return index value of a serach string


//split() convert a string into array 
// console.table(Array(text.split("")))
const sts=`SackOverFlow`;    //both Methods are same 
// console.log(sts.split(""))
// console.log([...sts])

// shift() remove first item from an array
// pop() remove last item from an array
// slice() remove series of item  pass as Index Value 
//delete() remove item from an array Not Lenghth
//push() add item at the last of array
// splice(0) remove all item from an array delet them

//find min()  and Max()  num from array
const nii=[1,5,0,90,501,789,23645];
const mx=Math.max(...nii);
const min=Math.min(...nii);
// console.log(`max Number is :  `+mx)
// console.log(`min Number is :  `+min)

//we also do in foor Loop as array to function
function Mim(o){
    let yuy=""
    let yux=o[0]
    for(let k=0; k<=o.length;k++){
        yuy=o[k];
        if(yuy>yux){
            yux=yuy
        }
    }
}
// console.log(Mim(nii))

//let use rudecer as function to get small large even odd nUmber as we want
const lp=nii.reduce((a,b)=>Math.min(a,b))
const lpx=nii.reduce((a,b)=>Math.max(a,b))
// const oo=nii.reduce((a,b)=>(a<b))

console.log(`Min value  `+lp)
console.log(`Min value  `+lp)
// console.log(`Max Value `+oo)

//Number of eays to creat a array
var arr3 = new Array(); //[] empty created
//in line array creating function
var newArray = Array.from({ length: 5 }, (_, index) => Math.pow(index, 2));
// console.log(newArray)

//join() join all elemt of array add key word after every item
console.log(nii.join(" _ "))

//entry() return an array with Kay and Value like pair

function Entry(llp){
    const ll=[...llp]
    for(const[index,value] of ll.entries()){
        console.log(index,value)
        }    
}
// Entry(nii)

//deep nested array  or multi dimensional array
var deeplyNested = [4,[5,6,[7,8],9]];

//unshify() add items at the first of array
function Opoo(){
    const object = {
        key1: 10,
        key2: 3,
        key3: 40,
        key4: 20 }
    var array = [];
    for(let people in object) {
    array.push([people, object[people]]);
    }
    return console.log(array)
}
// Opoo()

//with slice ()  we can add item at specific positon in array
// It takes two parameters, arr.slice([begin[, end]]) : 
//if one parameter is pass it will escape first copy the remaining