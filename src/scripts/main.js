console.log("Welcome to the main module")

import { addPlant, usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { plantSeeds } from "./tractor.js"


//storing the value of createPlan function in a variable called yearlyPlan
const yearlyPlan = createPlan()
// const asparagusSeed = createAsparagus()

// const seedObject = { height: 29, output: 32 }

// addPlant(seedObject)
// const copiedPlants = usePlants()






