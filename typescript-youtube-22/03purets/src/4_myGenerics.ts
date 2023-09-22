const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(true);
identityThree("nouman");
identityThree(1);
// identityThree<boolean>(true);
// identityThree<string>("nouman");
// identityThree<number>(27);

function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

// identityFour<Bootle>({})

// ****************************

// generics in array

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}
getSearchProducts([1, 2, 3, 4, 5]);
getSearchProducts(["a", "b", "c", "d"]);

// arrow function with generics
const getMoreSearchProducts = <T>(products: T[]): T => {
  //do some database operations
  const myIndex = 4;
  return products[myIndex];
};

// <T,>  this comma here in other frameworks, is just to indicate that it's a generic not an HTML tag

// ****************************

// we can take more than one generic types

function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}

console.log(createPair<string, number>("hello", 42)); // ['hello', 42]

// ****************************

interface Database {
  connection: string;
  username: string;
  password: string;
}

let dbObj: Database = {
  connection: "localhost",
  username: "local",
  password: "",
};

// restricting generic to be a type of Database(object)
function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, dbObj);

// ****************************

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
