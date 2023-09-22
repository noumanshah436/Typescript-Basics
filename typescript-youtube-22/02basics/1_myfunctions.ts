// this function take number as parameter and return a number
function addTwo(num: number): number {
  return num + 2;
  //return "hello"
}
let myValue = addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("hitesh");

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

signUpUser("hitesh", "hitesh@lco.dev", false);
loginUser("h", "h@h.com");

// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

// **************************************

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]

heros.map((hero): string => {
  // return 1
  return `hero is ${hero}`;
});

// (a: string) => void
// “function with one parameter, named a, of type string, that doesn’t have a return value”

// **************************************


// The void type is used for functions that have side effects and do not return a value.
// The never type is used for functions that always throw an error or enter an infinite loop and never return a value.

function consoleError(errmsg: string): void { // void means return nothing
  console.log(errmsg);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

// **************************************

// Functions Which Return Promises
// If you want to annotate the return type of a function which returns a promise, you should use the Promise type:

async function getFavoriteNumber(): Promise<number> {
  return 26;
}

async function asyncFunction(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved with a string');
      // or reject('Promise rejected with an error');
    }, 1000);
  });
}

// Using async/await
async function main() {
  try {
    const result = await asyncFunction();
    console.log(result); // Output: Promise resolved with a string
  } catch (error) {
    console.error(error);
  }
}

main();

export {};
