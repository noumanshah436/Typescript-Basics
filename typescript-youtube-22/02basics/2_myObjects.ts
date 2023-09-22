// const User = {
//     name: "hitesh",
//     email: "hitesh@lco.dev",
//     isAvtive: true
// }

function createUser({ name: string, isPaid: boolean }) {}

// give error if we pass extra properties
// createUser({name: 'Nuoman', isPaid: true, email: "h@h.com"})

// let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}

// we are still able to pass email , (wierd behaviour)
// createUser(newUser)

// ***********************

// return type as object

// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }

// ***********************

// type aliases

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

// ***********************

// readonly and optional(?)

type User = {
  readonly _id: string; // we cannot change _id of user
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number; // optional
};

let myUser: User = {
  _id: "1245",
  name: "h",
  email: "h@h.com",
  isActive: false,
};

myUser.email = "h@gmail.com";
// myUser._id = "asa"

// *******************

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

// make type using the combination of other types
// & for combine all the types
type cardDetails = cardNumber & cardDate & {
    cvv: number;
};

export {};
