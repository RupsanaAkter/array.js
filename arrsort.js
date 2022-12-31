const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
console.log(fruits);

// ascending order------
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);

// descending order-----
const point = [40, 100, 1, 5, 25, 10];
point.sort(function(a, b){return b - a});
console.log(point);

const pointss = [40, 100, 1, 5, 25, 10];
pointss.sort(function(){return 0.5 - Math.random()});
console.log(pointss);