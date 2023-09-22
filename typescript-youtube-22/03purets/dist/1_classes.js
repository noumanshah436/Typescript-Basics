"use strict";
// TypeScript adds types and visibility modifiers to JavaScript classes.
class Person {
    constructor() {
        // property initialization
        this.name = ""; // public property
    }
}
const person = new Person();
person.name = "Jane";
console.log(person);
// ************************
// There are three main visibility modifiers in TypeScript.
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it
// class User {
//     public email: string   // by default public
//     private name: string
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }
class User {
    // TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
    constructor(email, // shorthand syntax to directly initialize attributes
    name // name is a public member variable 
    // private userId: string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        // Similar to arrays, the readonly keyword can prevent class members from being changed.
        this.city = "Jaipur";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        // setter cannot have return type annotation
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hitesh = new User("h@h.com", "hitesh");
// hitesh.name
// hitesh.deleteToken()
