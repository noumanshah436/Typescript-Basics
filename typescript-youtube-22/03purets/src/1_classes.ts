// TypeScript adds types and visibility modifiers to JavaScript classes.

class Person {
  // property initialization
  name: string = ""; // public property
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
  protected _courseCount = 1;

  // Similar to arrays, the readonly keyword can prevent class members from being changed.
  readonly city: string = "Jaipur";

  // TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
  constructor(
    public email: string, // shorthand syntax to directly initialize attributes
    public name: string // name is a public member variable 
    // private userId: string
  ) {}

  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
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
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const hitesh = new User("h@h.com", "hitesh");
// hitesh.name

// hitesh.deleteToken()
