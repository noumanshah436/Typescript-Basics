"use strict";
// Narrowing  (https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
// how we can narrow down the type so that we can take better actions
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        // check if null
        if (typeof strs === "object") {
            // check if array
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
    // we have taken care of all the types
    // but what if strs is an empty string("")
}
function isAdminAccount(account) {
    // check if "isAdmin" prop is in the account
    if ("isAdmin" in account) {
        // now we are sure that account is of type Admin
        return account.isAdmin;
    }
}
// ****************************
// instanceof narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    // It tries to cast pet as a Fish and then checks if the swim property of the resulting object is not undefined.
    return pet.swim !== undefined;
}
// pet is Fish: This part of the code defines the return type of the function using the is keyword. It states that if the condition inside the function is true, the type of pet will be narrowed down to Fish.
//  isFish returns true, indicating that pet is of type Fish. Otherwise, it returns false, indicating that pet is not of type Fish
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird Food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side
}
// Exhaustiveness checking
// Exhaustiveness checking in TypeScript is a feature that ensures that you have handled all possible cases when working with discriminated unions or switch statements.
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            // TypeScript will raise an error if you forget a variant here.
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
// TypeScript tracks the possible values of the discriminant property based on the types in the discriminated union.
// In the switch statement, TypeScript expects a case statement for each possible value of the discriminant property.
//  It checks if all possible values are covered.
// If TypeScript determines that you have covered all possible values, it considers the default case to be unnecessary and unreachable because, according to the type system, there are no other values to fall into the default case.
