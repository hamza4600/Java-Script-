// cookies 
function Cookie(){
    if(navigator.cookieEnabled===false){
        alert(`cokkies are nOt enable `)
    }
}// run in th browser

//setting and adding coookies in the client side
const coooki_name=`Hamaz One`;
const coooki_Value=`Hello world`;
const coooki_Path=`/foo/bar`;
const coooki_Expire=(new Date(Date.now()+60000)).toUTCString();
//declear all varibles  cokie for 1 Houre

function CokieSet(){
    document.cookie+=
    coooki_name+`=`+coooki_Value
    + "; expires="+coooki_Expire
    + "; path="+coooki_Path
}// add cookies to document Body a

//Read the cookies Object

function Read(){
    var name = name + "=",
    cookie_array = document.cookie.split(';'),
    cookie_value;
    for(var i=0;i<cookie_array.length;i++) {
    var cookie=cookie_array[i];
    while(cookie.charAt(0)==' ')
    cookie = cookie.substring(1,cookie.length);
    if(cookie.indexOf(name)==0)
    cookie_value = cookie.substring(name.length,cookie.length);
    }
}

// we can also remove the cookies as want

// function to set get and check cookies
function setCookie(name,value,exp){
    const d= (new Date(Date.now()+6000)).toUTCString();
    let expire= `expire=`+d;
    document.cookie=name+ `=`+value+`;`+expire+`;path=/`;
 }  
 function getCookie(cname){
    let name=cname +`=`;
    let ca=document.cookie.split(`:`);
    for(let i=0; i<=ca.length; i++){
        let c=ca[i];
        while(c.charAt(0)==" "){
            c=c.substring(1);
        }
        if(c.indexOf(name)==0){
            return c.substring(name.length, c.length)
        }
    }
    return ""
 };
 //check cookies
 function checkCookie() {
   let user = getCookie("username");
   if (user != "") {
     alert("Welcome again " + user);
   } else {
     user = prompt("Please enter your name:", "");
     if (user != "" && user != null) {
       setCookie("username", user, 365);
     }
   }
 } 

 //local storage provide a waty that we can use to store key and value s
 var players = [{name: "Tyler", score: 22}, {name: "Ryan", score: 41}];
// localStorage.setItem('players', JSON.stringify(players));
// console.log(JSON.parse(localStorage.getItem(`players`)));
//in localStorage we can store data up to 10Mb and get that data as we wanted

//sessionStorage is used for low storage of data

// error condition Most Browser Block cookies  so use try{} catch{} statemnat for error habeling

//JSON 
const jsonString = '[{"name":"John","score":51},{"name":"Jack","score":17}]';
const data= JSON.parse(jsonString,(key,val)=>
    key==="name"?val.toUpperCase(): val
)
console.table(data)

const world = {
    name: 'World',
    regions: []
    };
    world.regions.push({
    name: 'North America',
    parent: 'America'
    });
    console.log(JSON.stringify(world));
    // {"name":"World","regions":[{"name":"North America","parent":"America"}]}

    // 
function Aar(col,model){
    const Car={
        col :this.col=col,
        model :this.model=model
    }
    return Car
}          //constructor Object
const gag= new Aar();
gag.col=`Balck`;
gag.model=`honda`;
// console.log(gag)
const user={
    name: `Hamza`,
    gag,
    id: Math.random().toFixed(3)
};
console.log(user)          

// above code can also be written as 
class Car {
    constructor(color, speed) {
    this.color = color;
    this.speed = speed;
    this.id_ = Math.random();
    }
    toJSON() {
    return {
    $type: 'com.example.Car',
    color: this.color,
    speed: this.speed
    };
    }
    static fromJSON(data) {
    return new Car(data.color, data.speed);
    }
    }//calass construction
    var userJson = JSON.stringify({
    name: "John",
    car: new Car('red', 'fast')
    });
    console.table(userJson)


    //simple api call
function api(urls){    
    fetch(`${urls}`).then(response => response.text()).then(text => {
        console.log("The home page is " + text.length + " characters long.");
        });}
        