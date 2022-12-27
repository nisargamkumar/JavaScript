console.log("HEY JAVASCRIPT");       //output: HEY JAVASCRIPT

//initializing "Var"

var a=10;
console.log("Value of a:", a);       //output: Value of a:10

// can initialize values to already defined variables in "var"

a="good morning"                     
console.log(a);                        //output: good morning 

a=true;
console.log(a);                         //output: true

a=2;
var b=a+5;
console.log(b);                         //output: 7

a="hello";
b=a+55;
console.log(b);                         //output: hello55

a="bye";
b=99+a;
console.log(b);                         //output: 99bye

//using "let"
let x="nis"
console.log(x);                         //output: nis

//let x="heyy";                         // cannot initialize the value for aleady defined variable in "let"

let y=20;
z=20-y;
console.log(z);                         //output: 0

//using "const"
const m=2;
console.log(m);                         //output: 100

console.log(22+m+"hours");              //output: 24hours

//m=30;                                 //cannot change the constant value in "Const"

//keyword "typeof"

const val=100;
console.log(val, typeof val);             //output: 100 'number'

const vall=100.99;
console.log(vall, typeof vall);           //output: 100.99 'number'

var a="hey";
console.log(a, typeof a);                 //output:hey String

var b=true;
console.log(b, typeof b);                 //output:true 'boolean'

var n=null;
console.log(n, typeof n);                 //output:n 'object'

var p
console.log("value of p:" , typeof p);        //output:value of p: undefined
                                              //here we didnt initialize p value

console.log(p, typeof p);                      //output: undefined 'undefined'

var pp=undefined;
console.log("value of pp:" , typeof pp);    //output:value of p: undefined
                                            //here we did initialize p value as undefined
