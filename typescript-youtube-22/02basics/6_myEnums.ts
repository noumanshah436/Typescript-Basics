// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.

enum CardinalDirections {
  North,
  East,
  South,
  West,
}

let currentDirection = CardinalDirections.North;

// North is the first value so it logs '0'
console.log(currentDirection);

// throws error when commented in as 'North' is not a valid enum
// currentDirection = 'North';
// Error: "North" is not assignable to type 'CardinalDirections'.

// ***********************

enum CardinalDirections2 {
  North = 1,
  East,
  South,
  West,
}

// logs 1 since we initialized the first value to something other than '0'
console.log(CardinalDirections2.North);

// logs 4 as it continued on from the initial '1' value
console.log(CardinalDirections2.West);

// ***********************

enum CardinalDirections3 {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}

// logs "North"
console.log(CardinalDirections3.North);

// logs "West"
console.log(CardinalDirections3.West);

// ***********************

// Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.

enum SeatChoice {
  AISLE = "aisle",
  MIDDLE = 3,
  WINDOW,
  FOURTH,
}

const hcSeat = SeatChoice.AISLE;
