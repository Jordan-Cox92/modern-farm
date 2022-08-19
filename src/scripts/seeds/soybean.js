//In each module define and export a function for creating a seed.
// Define the functions with the following syntax. 
//If the plant is Asparagus, the function should be named createAsparagus. 
//Same thing for all the others. Use arrow functions. Do not use the function keyword.




export const createSoybean = () => {
    const soybeanSeed = { type: `Soybean`, height: 20, output: 4 }
    return soybeanSeed
} 