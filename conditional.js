// conditional statemt in JS 
// if else satemt for differnt actions  defpennd upon boolenntrue and false 
// expmale
function Animal(ani){
    const animal=ani
    const result=(animal===`dog`)?`Pitbull dog`: `Not a Dog`
    return     console.log(result)
} ;
//simpler explation is that if animal ===dog hen show Pitbull otherwise show Not aDog
Animal(`dog`)
Animal(`dos`)

// we can also uised if else statemtent in this as 
// MAIN POINST DON,T USE { CONST } IN IF ELSE STATEMENT  cause Problum
function Anni(ty){
    const animal=ty;
    let result=""
    if(animal===`good`){
        result=`Very Good`
    } else{
        result=`Not Good`
    }
    return console.log(result)
}
Anni(`good`)
Anni(`goods`)

/* same example 
a === 1 ? alert('Hey, it is 1!') : alert('Weird, what could it be?');
if (a === 1) alert('Hey, it is 1!') else alert('Weird, what could it be?'); */

//we can also apply morwe complex logic on ternary Operations
// foo ?(bar ? 1 :2 ) :3 

//  WE CANNOT USED CONTROLL STATEMENT IN TERNARY OPERATIONS
function Cont(){
    const anim=`dog`;
    for(let i=1; i<=5; i++){
        (anim===`dog`)  //? break:console.log(i);
        console.log(i)
    }
    console.log(`Conroll not applied`)
}
Cont()
/* FOR RETURN STATEMNET
         var animal = 'kitty';
         return (animal === 'kitty') ? 'meow' : 'woof';
*/

    // SWITCH STATEMENTS  have more thatn one conditions and actions 
    //USED BREAK STATEMENT  after a case
function Swi(aq){
    let myy= aq
    switch (myy) {
        case `animal`:
            console.log(`animals are very good for socoity`)
            break;
        case `fruit`:
            console.log(`fruites are goof for Healty`)            
            break;
        default:
            console.log(`I love math and Physics `)
            break;
    }
}        //WE CAN ALSO USED FUNCTIONS IN CASES that function should have return statemt
console.log(`SWITCH STATEMENT ;:  :`)
Swi(`animal`)
Swi(`fruit`)
Swi(`science`)

//we can used multiple case that have same return code as 
function Mult(rf){
    var x = rf 
    switch (x) {
    case "a":
    case "b":
    case "c":
    console.log("Either a, b, or c was selected.");
    break;
    case "d":
    console.log("Only d was selected.");
    break;
    default:
    console.log("No case was matched.");
    break; // precautionary break if case order changes
    }
}
Mult(`x`)
Mult(`b`)

//IF ELSE SATATEMNET  condition true runnthe code other wise escape;
function Iff(sx){
    console.log(`Enetr Only Number`)
        const i=parseInt(sx)
    if (i < 1) {
        console.log("i is smaller than 1");
        } else if (i < 2) {
        console.log("i is smaller than 2");
        } else {
        console.log("none of the previous conditions was true");
        }
}
console.warn("if else\n\n")
Iff(1)
//we can have number of if-else statemnet
 
// simple exmaple
const AnimalSa={
    dog(){
        return `wawawaw wa`
    },
    cat(){
        return `ma ama mma mamam`
    },
    lion(){
        return `rrorr rroro ro`
    },
    default (){
        return ` "iT is nOt in Range" `
    }

};
console.dirxml(AnimalSa)

function MakeSpekAni(animal){
    const speak=AnimalSa[animal] || AnimalSa.default;
    console.log(animal + ` says `+ speak() )
}
MakeSpekAni(`dog`)
MakeSpekAni(`cat`)
MakeSpekAni(`asw`)