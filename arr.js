var arr=['Rohim','Korim','Sakib','Tully','Munna','Tamanna'];
var length=arr.length;
console.log(arr);
console.log(length);

const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
console.log(car);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// var fruit=fruits.toString();

// console.log(fruit);

var persons=['Kamal','Jamal','Sakib','Raihan','Bappi'];
var person=persons.join('*');
console.log(person);

// pop means remove last number index value-----

var prices=[3,1,2,3,4,5,6,67,7,8,9];
var price=prices.pop();
var price=prices.pop();
var price=prices.pop();
var price=prices.pop();
var price=prices.pop();
var price=prices.pop();
var price=prices.pop();
var price=prices.pop();
var price=prices.pop();
var price=prices.pop();
console.log(prices);

// push means added last index value----

var names=['Kajal','dipika','katrina','alia','kapur'];
var name=names.push('panna');
var name=names.push('manna');
var name=names.push('jahanara');
var name=names.push('ialam');
var name=names.push('kairul');
var name=names.push('ripon');
var name=names.push('sakil');
var name=names.push('emon');
var name=names.push('ritu');
console.log(names);
// shift means delete first element in array----

var animals=['cow','goat','tiger','lion'];
var animal=animals.shift();
console.log(animals);

// unshift means added first element in the array----

var flowers=['water-lili','rose','kosmos','daliya'];
var flower=flowers.unshift('hibiscus-rosa-sinensis');
console.log(flowers);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const Children = arr1.concat(arr2, arr3);
console.log(Children);


const arr7 = ["Emil", "Tobias", "Linus"];
const my = arr7.concat("Peter"); 
console.log(my);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

const ab = ["Banana", "Orange", "Apple", "Mango"];
ab.sort();
console.log(ab);