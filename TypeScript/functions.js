"use strict";
function add(num1, num2, num3 = 10) {
    return num1 + num2 + num3;
}
console.log(add(12, 21));
const sub = (num1, num2) => {
    return num1 - num2;
};
const mult = function (num1, num2) {
    return num1 * num2;
};
function add1(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((acc, val) => acc + val);
}
console.log(add1(1, 2, 3, 4, 56, 2));
function getItems(items) {
    return new Array().concat(items);
}
console.log(getItems(["a", "a", "b", "c", "d"]));
console.log(getItems([1, 2, 3, 4, 5]));
