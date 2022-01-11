// we can also extend the HTml elemnts as we want
// const prototype = Object.create(HTMLImageElement.prototype);
// prototype.createdCallback = function() {
// this.addEventListener('load', event => {
// console.log("Image loaded successfully.");
// });
// };
// document.registerElement('ex-image', { extends: 'img', prototype: prototype });
// {/* <img is="ex-image" src="http://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png" /> */}


// we can also regester a new event as we want
// const InitiallyHiddenElement = document.registerElement('initially-hidden', class extends
// HTMLElement {
// createdCallback() {
// this.revealTimeoutId = null;
// }
// attachedCallback() {
// const seconds = Number(this.getAttribute('for'));
// this.style.display = 'none';
// this.revealTimeoutId = setTimeout(() => {
// this.style.display = 'block';
// }, seconds * 1000);
// }
// detachedCallback() {
// if (this.revealTimeoutId) {
// clearTimeout(this.revealTimeoutId);
// this.revealTimeoutId = null;
// }
// }
// });
//   <initially-hidden for="2">Hello</initially-hidden>
//   <initially-hidden for="5">World</initially-hidden>


// we an also creat a funtion in which we can apss Object name value and propty in argumnets 
 

// Binaray for of Data 
console.log(Uint8Array) 
console.log(Uint32Array)
function ArrayBufferToBinary(buffer) {
    var uint8 = new Uint8Array(buffer);
    let koi= uint8.reduce((binary, uint8) => binary + uint8.toString(2), "");
    console.log(koi)
}
// ArrayBufferToBinary(`hazma`) 

// view the memory buffers
let buffer = new ArrayBuffer(8);
let byteView = new Uint8Array(buffer);
let floatView = new Float64Array(buffer);

console.log(buffer)
console.log(byteView)
console.log(floatView)

//we can use template litterant insted of a text we can easily pass the value from functions

// always send and get cookies as we wanted in Header 

//get data
function Data(){
    fetch("https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow")
    .then(resp => resp.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}


//closure  function get value from outside 
function makeCo(dd){
    let a=dd;
    return {
        value : function(){
            return console.log(a)
        },
        incre: function(){
            a++
        }
    };
}
const kh=makeCo(10);
kh.incre()
console.log(kh.value)


// Hosting means declear all varible at the top then use them