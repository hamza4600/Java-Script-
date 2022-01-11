// ESC16 provide us A way we can  decleara function and use it in a other file usinf import export , default  with file name 

// in file  at top impoert hamaz form "./home"  a basic example

// if we want to import an entire module hen use *  file name 

// if we want to export multiple function  fo as
// export { namedMember1, namedMember2, namedMember3 }

//factory is a way of creating the Object from js functions

function cowFactory(name) {
    function formalName() {
    return name + ' the cow';
    }
    return {
    talk: function () {
    console.log('Moo, my name is ' + formalName());
    },
    };
    }// we can also creat a Object in this that will return proetr pass as a props
    var daisy = cowFactory('`Hamza`');
    daisy.talk();
    // console.log(daisy)

    //geo location of user


    // A Proxy in JavaScript can be used to modify fundamental operations on objects. Proxies were introduced in ES6. 
    let handler = {
        get(target, property) {
        if (!Reflect.has(target, property)) {
        return {
        value: undefined,
        type: 'undefined'
            };
        }
        let value = Reflect.get(target, property);
        return {
        value: value,
        type: typeof value
            };
         }
        };
        let proxied = new Proxy({foo: 'bar'}, handler);
        console.log(proxied.foo); // logs `Object {value: "bar", type: "string"}`

        // arrow function
        const getJSON = async url => {
            const response = await fetch(url);
            return await response.json();
            }

            // we will also discuss low level APIs that chrom provde us ti interact with the user Device loke 
            // Notification , Vaibrations, battter statue etc more also 
            // rsa and sha 256 algortim keys and encryption on Data
            // we should also prevent to run loop inside the client side and server side  if loop then push that to the array and them show that array
            function LooOne(){
                var list = document.getElementById("list");
                for(var i = 1; i <= 5000; i++) { // update on every loop
                list.innerHTML += `<li>item ${i}</li>`;
                }
            }

            function LooTwo(){
                var list = document.getElementById("list");
                var html = "";
                for(var i = 1; i <= 5000; i++) {
                html += `<li>item ${i}</li>`;
                }
                list.innerHTML = html; // update once
            }
            //below code is as Best appoarch for this
            function Bestlop(){
                var list = document.getElementById("list");
                var fragment = document.createDocumentFragment();
                for(var i = 1; i <= 5000; i++) {
                li = document.createElement("li");
                li.innerHTML = "item " + i;
                fragment.appendChild(li);
                i++;
                }
                list.appendChild(fragment);
            }


            // we should used moemory when we have to do computing function if One done don,t re-compute  take it from the memory 