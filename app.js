Arrays:

let languages=['java','python','ruby','nodejs',undefined,null,true]
console.log(languages[6]);
var languages1= new Array('java','python','aws','firebase','expressjs');
console.log(languages1[3]); 
var languages2=Array.of('java','python');
var languages3=Array(10);
console.log(languages2.length);
console.log(languages3.length);

var arra1=['java','node'];
var arra2=new Array('java','node');
var arra3=Array.of('java','node');
var arra4=Array(5);
var arra5='sashi';
console.log(typeof arra1,typeof arra2,typeof arra3,typeof arra4,typeof arra5);
console.log(Array.isArray(arra1));
console.log(Array.isArray(arra2));
console.log(Array.isArray(arra3));
console.log(Array.isArray(arra4));
console.log(Array.isArray(arra5));


var str='hello welcome to the jspiders';
var es5way=str.split('');
console.log(es5way);


var es6way=Array.from(str);
console.log(es6way);

let[...str]=spread;
console.log(spread);


let array1=['java','python'];
let array2=['nodejs','Angular','node'];

let concatarray=array1.concat(array2,'rakesh');
console.log(concatarray);

let totalarray=[...array1, ...array2,'rakesh and gayatri',true];
console.log(totalarray);