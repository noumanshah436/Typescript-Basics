let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = { name: "hitesh", id: 334 };

hitesh = { username: "hc", id: 334 };

// ****************

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);

// }

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

getDbId(3);
getDbId("3");

// ****************

//array

const data: number[] = [1, 2, 3];

const data2: string[] = ["1", "2", "3"];

const data3: string[] | number[] = ["1", "2", "3"];  // it can be all the strings or all the numbers

const data4: (string | number | boolean)[] = ["1", "2", 3, true];

const data5: any[] = ["1", "2", 3, true]; // problem here: you should make your types more strict

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew"

// export {}
