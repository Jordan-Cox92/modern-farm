import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

//function accepts the year's planting plan as input
export const plantSeeds = (YearlyPlanArray) => {
    //iterating over the parent array
    for (const plantArray of YearlyPlanArray) {
        //iterating over the child array
        for (const plant of plantArray) {
            //invoking function to get corresponding plant seeds
            if (plant === `Asparagus`) {
                addPlant(createAsparagus())
            } else if (plant === `Soybean`) {
                addPlant(createSoybean())
            } else if (plant === `Sunflower`) {
                addPlant(createSunflower())
            } else if (plant === `Wheat`) {
                addPlant(createWheat())
            } else if (plant === `Potato`) {
                addPlant(createPotato())
            } else if (plant === `Corn`) {
                addPlant(createCorn())
            }
        }
    }
}