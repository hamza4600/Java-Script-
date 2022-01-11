// discuss abbcix example of classes
// they are the constructor and use new key work to creat a new Object from class
//we also have constructor in class as we have in Reat
class Hamza {
    make(){
        console.log(`make a new class`)
    }
};
const llo= new Hamza;
// console.log(llo.make())

class User {
    constructor(name){
        this.name=name
    }
    sayHi(){
        console.log(this.name)
    }
}; // is like a constructor
const lpo=new  User(`Hamza`)
console.log(lpo)

//getter and setter allow us to read and write  properties in a class

//Methods
class SomeThing {
    constructor(data){
        this.data= data
    }
    doIt(text){
        return {
            data: this.data,
            text
        }
    }
}
const som= new SomeThing({});
console.log(som.doIt(`hamza`))

class SecretAgent{
    constructor(secret){
    this._topSecret = secret; // it private by convention
    this.coverStory = 'just a simple gardner';
    this.doMission = () => {
    figureWhatToDo(this_topSecret);
    };
    }}
const khan=new SecretAgent;
console.log(khan)    

//Context Object 
//pass value to function 
const Pak={
    name:"Hamaza",
    age:25,
    bio:function(){
        console.log(`My name is `+this.name)
    }
} ;

(Pak.bio()) // Hamza
const Khan=Pak.bio;
Khan() // undefined Beacuse value is not passed

// iN functions this Help in creating Objects value  are passesd with in Obect or function in scope

// Getter and Setter functions in Obejcts
// we can get ans change or set  the values of Obeject that we defined
class kar {
    constructor(first,last){
        this.first=first;
        this.last=last;
    }
    get data(){
        return this.first +` `+this.last
    }
    set firs(first){
        this.first=first;
        // this.last=last;
    }
    set las(last){
        this.last=last;
        // this.last=last;
    }
};

 const Lala= new kar;
 Lala.firs=`Hamza` //set values
 Lala.las=` Khan`

 console.table(Lala) 

 // in Js functionn name start from Capital letter are the constructor and new Keyword is required 
 function Fafa(one,two){
    let gaga={
    one:  this.one=one,
    two:  this.two=two
}
    return gaga
 }
const news= new Fafa();
news.one=`Hamza`;
news.two=`lahore`;
console.table(news)

// it is an simple examle we can creat a construtor function or a Object that return Vaule we pass as
