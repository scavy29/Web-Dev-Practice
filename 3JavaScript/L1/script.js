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
