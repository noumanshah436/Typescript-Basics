"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(true);
identityThree("nouman");
identityThree(1);
// identityThree<boolean>(true);
// identityThree<string>("nouman");
// identityThree<number>(27);
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({})
// ****************************
// generics in array
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
getSearchProducts([1, 2, 3, 4, 5]);
getSearchProducts(["a", "b", "c", "d"]);
// arrow function with generics
const getMoreSearchProducts = (products) => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
};
// <T,>  this comma here in other frameworks, is just to indicate that it's a generic not an HTML tag
// ****************************
// we can take more than one generic types
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair("hello", 42)); // ['hello', 42]
let dbObj = {
    connection: "localhost",
    username: "local",
    password: "",
};
// restricting generic to be a type of Database(object)
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction(3, dbObj);
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
