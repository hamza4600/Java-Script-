//          ITTERATION      LOOPS
//for loop initize , condition , loop back code
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
//for loop an array
for(let oi=0; oi<=people.length; oi++){
    // console.table(people[oi])
}
//function return a arrar items throught loop
function Rett(ere){
    for(let y=0; y<=ere.length; y++){
        console.table(ere[y])
    }
}
// Rett(people)

//we can aLSO Invers loop an array
function InAr(sx){
    for(let o=sx.length-1 ; o>-1; o--){
        console.table(sx[o])
    }
}
// InAr(people)

//THERE ARE MANY POSIBBILIES AS WE kNOW 
// let pl=0,lenght=people.length;
// for(; pl<lenght;){
//     console.table(people[pl]);
//     pl++
// }  // It also works as same way


//  WHILE LOOP  we can also use it as for loop 


//FOR IN loop   is an easy way to loop the item from aray and OBject
function Fin(df){
    for(i in df){
        console.table(df[i])
    }
};// using for in looop
// Fin(people)

// FOR OF  loop  is  also used to itterate item from a arary and Object
function Fof(ll){
    for(let l of ll){
        console.log(l)
    }
}
// Fof(people)

//let Have an Another example 
function Rouu(){
    const dfd=[1,2,3,4,5,6,7,8,9,10];
    for(let u in dfd){
        console.log(dfd[u]*2)
    }
}
// Rouu()

// FOE EACH IS Also used is used in ES5


// EQUALENT IN  loop stop if value is found
const pk=[2,4,5,7,6,8,9,17,20];
const kp=[2,4,7,9];
function Stop(xx){
    let yoyo="";
    console.log(`Funtion start`)
    for(let i=0; i<=xx.length && (xx[i] !==0); i++ ){
        //  console.table(xx[i])
            yoyo=(i)
    }
    console.log(`Odd Numer Have Been Found`)
    return console.log(`Numer is After `+yoyo)
}
// Stop(kp)

// Destructure an array
//into differnt parts we want as
const kpk=[2,4,7,9];
const [a,b,c,d]=kpk;
console.log(a);
console.log(b);
console.log(c);
console.log(d); //values have been passed

//we can also  skip as 
const [,p,,l]=kpk;
console.log(p)  //4
console.log(l)      //9

// rest OPerator can also be used similary is spread oprator
const [g,...o]=kpk;
console.table(g +`  o=\n`+ o)

const nm=['Hazma','Hassan','SAmeer','Ameer',`ALi baba`]
const [[...fist],...lo] =nm;
// console.table(fist)
// console.table(lo)

//removing duplicate items from array
let uniqueArray = [... new Set(['a', 1, 'a', 2, '1', 1])];
console.table(uniqueArray) //remove duplicate items 

//comparing arrays  
function comarArr(a1,a2){
    let i,aa,bb;
    aa=Array.isArray(a1);
    bb=Array.isArray(a2);
    if(aa!==bb){
        return false
    }
    if(!(aa===bb)){
        return aa===bb
    }
    if(aa.length!==bb.length){
        console.log(`Array same But items diffent`)
        return false    
    }
    for(i=0;i<a1.length;i+=1){
        if(!comarArr(a1[i],a2[i])){         //match all items in array
            return false
        }
    }
    console.log(`Array with item are same`)

    return  true //must equal;

};
const dc=[1,2,3,4]
const dx=[1,2,3,4,5]
// comarArr(dc,dx)

//REVERSE A ARRAY 
console.log(dc.reverse())
//deeep revser a array useing recursion
function DepRev(arr){
    arr.reverse().forEach(element => {
        if(Array.isArray(element)){
            DepRev(element)
        }
    });
    return arr
}// reverse all items in multi- dimensional array
var arr = [1, 2, 3, [1, 2, 3, ['a', 'b', 'c']]];
console.log(`deep Reverse array`)
console.table(DepRev(arr))

//SHALLOW CLONINGH ARRAY
const shall=[...arr];
// console.table(shall) 
//it can also be done as 
const lkl=arr.slice()
// console.log(lkl)
// we can alsp pass the number of item we want to slice 

//CONCATING Arrays adding
var array1 = [1, 2];
var array2 = [3, 4, 5];
console.log(...array1,...array2) //or (a1).concat(a2)

//MAIN pOINST IF we have large array the, we can get StackOverFlow so we need to push to array 

//Merge two araays liekkey and valeue
var columns = ["Date", "Number", "Size", "Location", "Age"];
var rows = ["2001", "5", "Big", "Sydney", "25"];
var result = rows.reduce(function(result, field, index) {
    result[columns[index]] = field;
    return result;
    }, {})
    console.table(result);  //we can also add it  programatically

// function Merge(a1,a2){
//     let results=a2.reduce(function(result,field,index){
//         result[a1[index]]=field;
//         //  results
//     })
//     console.log(results)
// };
// Merge(columns,rows)





// SPREAD OPERATORS

