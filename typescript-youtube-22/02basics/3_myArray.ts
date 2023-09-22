const superHeros: string[] = []

// const heroPower: number[] = []
const heroPower: Array<number> = []  // another way of defining type for array


superHeros.push("spiderman")
heroPower.push(2)

// ******************

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = []
allUsers.push({name: "", isActive: true})

// array of arrays
const MLModels: number[][] = [
    [255, 255, 255],
    []
]

export {}