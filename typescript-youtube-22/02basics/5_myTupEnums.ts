// https://www.youtube.com/watch?v=30LWjhZzg50  (2:06:00)

// tuple
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.


let rgb: [number, number, number] = [255, 123, 112]

// const user: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean]
tUser = ["hc", 131, true]


type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "hc.com"
// newUser.push(true)
























export {}