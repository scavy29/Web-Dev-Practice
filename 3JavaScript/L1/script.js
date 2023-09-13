var first="DV"
var second="Nora"

first="VD"
console.log(first +" weds "+ second);

// Hoisting: Variable and Functions are hoisted which means their declaration is moved on the top of the code
console.log(a);
//Declaration
var a;
//Initialization
a=10;

//There is a difference between undefined and not-defined
// undefined: Something Existing but don't know exactly what 
// not-defined: Something which does not exist at all

// -----------------------------------------------------


/* Types in Js
1] primitives
2] Reference = [] {} ()
Any Value which on copying does not exist a real copy but the main value reference is passed is called 
a reference whereas the value whose copy is real that value is Primitive
*/

var a=[11,12];
var b=a;
b.pop();
console.log(a);
console.log(b);


var prim=10;
var p=prim;
p=12;
console.log(prim);
console.log(p);


/*Conditionals: if, if-else, */

//Loop : Repeat
var num=10;

for(var i=0;i<num;i++)
{
    console.log(i);
}

/*  Functions : There are 6 styles to create Functions (3 is ES5/other in ES6)
*/
function Oreo()
{
    console.log("Split");
    console.log("Lick");
    console.log("Dunk");
}

Oreo();

/* Push Pop Shift Unshift Splice */
var arr=[1,2,3,4,5];
arr.push(6);
console.log(arr);   
arr.pop();
console.log(arr);
//Insert at Start
arr.unshift(0); 
console.log(arr);
//Delete from Start
arr.shift();
console.log(arr);
arr.splice(2,3);
console.log(arr);

/* Objects:
Holding details in a key value pair

1] Blank Object
var a={}

2]Filled Object
*/
var candidate={
    age:24,
    name:"Vikrant",
    email:"vd@gmail.com",
    linkedin:"Vikrant",
    contact:9921123
}

//Property having Function is called a method

// How to update a property
candidate.name="Vikrant Dekate"
candidate.contact=8600000054
