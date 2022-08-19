//define a variable whose initial value is empty array
const growingFieldArray = []
//this function adds seed to the field by pushing seedObject to the array
export const addPlant = (seedObject) => {
    //.isarray method determines whether value passed to function is array or not
    if (Array.isArray(seedObject)) {
        //.push to add to array
        growingFieldArray.push(seedObject[0])
        growingFieldArray.push(seedObject[1])
    } else {
        growingFieldArray.push(seedObject)
    }
}
//returns copy of the array of plants
export const usePlants = () => {
    return growingFieldArray.map(row => ({ ...row }))
}