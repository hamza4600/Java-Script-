// concept of HOC in js
// a higher order function is A function that take a function as a  argumnet  or a function that operate on Other function
// invoke a  Higher Order Funtion with a callback It also return another function
function Ifun(){
    console.log(`One Number is callled`)
    for(let p=0;p<=5;p++){
        console.log(p)
    }
    return function Iner(){
        console.log(`created and  called inside of Function`)
        for(let l=0;l<=5;l++){
            console.log(l)
        }
    }
};
// Ifun()() // call Two function at a Tiem

//      PURe FUNCTIONS 
// always return same output || they don,t relay on varible outside scope || they don,y modyfi the  state of application    aviod chainging

//impure function
let al={
    a:`hamza`
}
const impur=(input)=>{
    input.a=input.a+10
    return input.a
};
// let yu=impur(al); // will add chnages to Object 
// console.dirxml(yu)
// console.dirxml(al)


//pure Object 
 // it don,t modify the Oridinal Obejct  but retirna New Object that will have the chnage values 
function Pur(int){
    const output= int.a+ ` `+50;
    return output
};
let gy=Pur(al);
// console.log(gy)
// console.log(al)
// Pure function  must not relay on varibles outside
 const pur=(lo)=>{
     let go=10;
     let outsi=go*5;
     return outsi
 }// a simple example if impure function that will take value from outside  and manuplate it 
// const asf=pur(20);
// console.log(asf)

//      accepting function as arrgumnent 
function Tranform(fn,arr){
    let yoyo=[];
    for(let u of arr){
        yoyo.push(fn(u));
    }
    return yoyo
}; // take two argumnet function and array  
console.log(Tranform(x=>x*10,[0,2,3,4,5]))

//      CREATING AND INILIZTING PROTOTYPES IN oBJECTS
const man={
    studen:function(name,claxx,title,age){
        this.name=name;
        this.claxx=claxx;
        this.age=age;
        this.title=title;
    },
    set:function(name,claxx,title,age){
        this.name=name;
        this.claxx=claxx;
        this.age=age;
        this.title=title;
    },
};

const aja=  man.studen('Haan',"40","Goodaa ",'025');
const ajax=  new man.set('Hamza',"40","exillent ",'25');
 console.table(man) // propty added to student
 console.table(ajax) // ajax is new Object created from man
 // By using the set property we can creata class or Obejct that Propty we define also functions 