//In each module define and export a function for creating a seed.
// Define the functions with the following syntax. 
//If the plant is Asparagus, the function should be named createAsparagus. 
//Same thing for all the others. Use arrow functions. Do not use the function keyword.



//returns an array with two identical objects in it
export const createCorn = () => {
    const cornSeed = [
        { type: `Corn`, height: 180, output: 6 },
        { type: `Corn`, height: 180, output: 6 }

    ]
    return cornSeed
}