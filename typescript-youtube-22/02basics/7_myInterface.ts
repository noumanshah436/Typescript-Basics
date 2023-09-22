// An interface declaration is another way to name an object type.

// Differences Between Type Aliases and Interfaces
// Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
//  Almost all features of an interface are available in type, 
//  the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string  // return type of func is string
  startTrail(): string;        // another way
  getCoupon(couponname: string, value: number): number;
}

// reopening of the interface (Adding new fields to an existing interface)
interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const hitesh: Admin = {
  dbId: 22,
  email: "h@h.com",
  userId: 2211,
  role: "admin",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "hitesh10", off: 10) => { // variable name doesn't matter, only the type matter
    return 10;
  },
};

hitesh.email = "h@hc.com";
// hitesh.dbId = 33
