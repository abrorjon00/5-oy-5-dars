// Majburiy masalalar
// 1-misol
// function capitalizeName(name) {
//     return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }
// console.log(capitalizeName("abror abdurahimov"));


// 2-misol
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("salom"));


// 3-misol
// function Array(arr) {
//     let sum = arr.reduce((acc, num) => acc + num, 0);
//     return sum / arr.length;
// }
// let arr = [2, 3, 4];
// console.log(Array(arr));


// 4-misol
// function lengthsOfWords(arr) {
//     return arr.map(word => word.length);
// }
// console.log(lengthsOfWords("salom"));

// 5-misol
// function Arraytoq(arg) {
//     let res = arg.filter(function(v) {
//         return v % 2 == 1
//     })
//     return res
// }
// console.log(Arraytoq([2, 3, 4 ,5, 7]));


// 6-misol

// function Concatobj(arg1, arg2) {
//     return {...arg1, ...arg2}
// }
// let user = {
//     name: "abror"
// }
// let user2 = {
//     age: 16
// }
// let res = Concatobj(user, user2)
// console.log(res);


// 7-misol
// function strtrim(arg) {
//     return arg.split(' ').join('')

// }
// let res = "   sal  om"

// console.log(strtrim(res));


// 9-misol
// function MinMax(arr) {
//     return {min: Math.min(...arr), max: Math.max(...arr)};
// }

// console.log(MinMax([5, 2, 9, 1, 7]));

// 11-misol
// function array(arg) {
//     let res = arg.map(function(v) {
//         return v *2
//     })
//     return res
// }
// console.log(array([1, 2, 3, 4 ,8]));

// 13-misol
// function filter(arr) {
//     const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
//     return arr.filter(num => num > average);
// }

// console.log(filter([1, 2, 3, 4, 5]));


// 15-misol
// function Kvadratyigindi(arr) {
//     return arr.reduce((sum, num) => sum + num ** 2, 0);
// }
// console.log(Kvadratyigindi([1, 2, 3]));

// 16-misol
// function reverse(arr) {
//     return arr.reverse();
// }

// console.log(reverse([1, 2, 3])); 


// 17-misol
// function toUppercasee(arg) {
//     return arg.toUpperCase()
    
// }
// console.log(toUppercasee("salom"));


// 18-misol
// function filterByAge(arr, age) {
//     return arr.filter(function(num) {
//         return num.age > age
//     });
// }
// console.log(filterByAge([{name: "Alex", age: 25}, {name: "Bob", age: 20}], 21)); 


// 19-misol
// function array(arr, element) {
//     return arr.filter(item => item === element).length;
// }
// console.log(array([1, 2, 3, 1, 2, 1], 1)); 

// 20-misol



