//function accepts plant array as input
export const harvestPlants = (growingPlantsArray) => {
    const harvestedPlants = []
    //iterating the array of growing plants
    for (const plant of growingPlantsArray) {
        if (plant.type === "Corn") {
            const plantGrowing = plant.output
            //we want half for corn so we divide by 2 here
            for (let i = 0; i < plant.output / 2; i++) {
                harvestedPlants.push(plant)
            }
        }
        else {//anything other than corn and we want the entire output
            for (let i = 0; i < plant.output; i++) {
                harvestedPlants.push(plant)
            }
        }
    }//function returns an array of seed objects
    return harvestedPlants
}