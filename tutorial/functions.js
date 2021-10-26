var myGlobal = "hello";
let myLocal = "good day";

function myReusableFunction(){

    console.log(myGlobal);
    console.log(myLocal)

    accidentalGlobal = "greetings"; // has no "var"
    var local = "heya";

}

function myOtherReusableFunction(){
    console.log(accidentalGlobal);
    //console.log(local); // error
}

myReusableFunction();
myOtherReusableFunction();


/*
    Method context variables
*/
var v = "outside";

function myfunc(){
    var v = "inside";
    return v;
}

console.log(myfunc());  // returns method variable
console.log(v);         // returns global variable