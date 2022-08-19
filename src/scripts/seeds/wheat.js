//In each module define and export a function for creating a seed.
// Define the functions with the following syntax. 
//If the plant is Asparagus, the function should be named createAsparagus. 
//Same thing for all the others. Use arrow functions. Do not use the function keyword.



//each of these functions should return object with properties of type, height and output
export const createWheat = () => {
    const wheatSeed = { type: `Wheat`, height: 230, output: 6 }
    return wheatSeed
}