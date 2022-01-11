// discuss all basic Data types in Js 
// STRINGS
// NUMBERS
// FUNCTIONS
// OBJECTS
// a simple function that will sum the number pass in
function summ(...arguments){
    if(arguments.length===1){
        const [first]=arguments
        if (first instanceof Array){
            return summ(...first)
        }
    }
    return arguments.reduce((a,b)=>a+b)
}
// console.log(summ(10,20,500,540,-10))

// function check if value is Number or not
function isNum(value){
    if(value===null||value===undefined) return false
    return value.constructor===Number 
}
// console.log(isNum("Hama"))
// console.log(isNum(10))

// STRING
// different methods for creating String  and string functions 

const H="Heelo";
const W="World";
const R=H+" "+W;
// console.log(R)

// convert value to string
const qw= String(true)
const qa= String(35)
const qs= String(null);
// console.log(qw)
// console.log(qa)
// console.log(qs)


// toString() for number 

// Most comman type of Operations on a String
 
// creart a function reverse a string
function reverse(str){
    return str.split("").reverse().join("");
}
const ha=`Hamza Khanz`;
const ja= reverse(ha);
console.log(ja) //onky work on a string  reverse a string  if sysmbols it will fail

// split() seprate astring in an arary 
// reverse() reverse the elemat of aray
// join() join all elemts of arary
console.log(reverse(`9876543210`));


// if number conversted to string and the n return the origanal vaLue; It work on all values 
function StriRev(str){
     
    return [...String(str)].reverse().join("")
} 
console.log(StriRev(123456))

// our own reverse string methods no pe-define function
function CustReverse(stra){
    let strRe="";
    for (let i=stra.length-1; i>=0 ; i--){
        strRe+=stra[i]
    }
    return strRe
};
console.log(CustReverse(`natsikap`));

// simple comparision Operators for string
function Compare(a,b){
    if(a===b){
        return `value equal\n`
    }
    if(a>b){
        return `greate than\n`
    }
    else{
    return `less than`}
};
    // console.log(Compare(`hello`,`hamza`))
// console.log(Compare(`hamza`,`hamza`))
// console.log(Compare(`ali`,`Ali`))

// array methods and and functions
const arr=[`Pakisynt`,`Lahore`,`Amsterdam`];
// sort in alphane order aray
function sortt(aa){
    [aa].sort(function(a,b){
        return a.localeCompare(b)
    })
    console.log(arr)

};
// sortt()
function arrange(xx){
    const xxa=[]
    xxa.push(xx)
    xxa[0].sort(function(a,b){
    return a.localeCompare(b)
    })
    console.log(xxa)
}
// now only pass array it will arange it self 
// arrange(arr)

// access the specific value of the string 
const pal=`JAMAL kHAN`
// console.log(pal.charAt(2))
// console.log(pal[4])
// console.log(pal.charCodeAt(4) )


// a simple  way to write HTML in a string form  
var hello = '<p class="special">I&apos;d like to say "Hi"</p>';
console.log(hello)

//word counter
/* counet the NUmber of 
    CHARACTER WITH NO SPACE 
    WORDS 
    LINES
*/ 
 function worCount(word){
     let wom= word.match(/\S+/g)
     return {
         cahraterNoSpace:wom.replace(/\s+/g,"").length,
         chartater:wom.length,
         words:wom?wom.length:0,
         lines: wom.split(/\r*\n/).length
     }
 };
//  worCount(`vxvgecge`).words

// TRIM witespacing trim()
const gty=`  "asd,fghj,kertyuiol"  `;
// console.log(gty.trimLeft())

// string into array
// convet array 
const stA=gty.split("")
console.log(stA)

// join() methods to bring to string w can also add some thing to it as we want 
console.log(stA.join("--"))
console.log(stA.join(""))
// console.log(stA.join("\n"))


// function that will find a varible is a string or not
function Check(vale){
    return typeof vale==="string"||vale instanceof String
};
const qwq=`sdcfvbnmhjk`
const vv=123456789
// console.log(Check(qwq))
// console.log(Check(vv))

// SLICE METHOD  in aray and string
const cd=qwq.slice(0,5) //betweeen 0 to 5 wil also be 
console.warn(cd)

// .toString() is used to convert ainto string
 let sqs=`hamz`;
 let sq=`1234967524220054`;
 console.log(parseInt(sqs)) //Nan becaues is not a Number 
 console.log(parseInt(sq))  

//  String find and replace functions  search string

let hgf=`ASDFGBNMXCFVGBHJKSDEFGHNMAwertyujkm`;
console.log(hgf.indexOf("M")) //index value of a string 
console.log(`First Postion A `+hgf.indexOf("A")) //index value of a string 
console.log(`last Postion A `+hgf.lastIndexOf("A")) //last Index of


// includes return true  word is present in a string 
console.log(`is present `+hgf.includes(`JK`))
console.log(`on Present `+hgf.includes(`zq`))

// replace() replace a string with first to another 
const uy=`Hello Hamza How are `
console.log(uy.replace(`Hamza`,`Iqra`)) // namw wil be iqra 
// it have several Parametrs we can use thrm as we want 

// toUpperCase() and toLowerCase() on a string 


// repeate a string as we ant 
const qzz=`I Love America\n`;
console.log(qzz.repeat(10))
// defina our own funcxtion for this as
function Repea(dsd,nu){
    const stt=new String(dsd); //a string
    const na=new Number(nu)
    const final= new Array(na+1).join(stt)
    return final
} //dsd wil string and nu will  be Number of times 
// console.warn(Repea(`hamza\n`,100))




