const carMakers = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

// const carsByMake: string[][] //must have initialization
const carsByMake: string[][] = []

//help with inference when extracting values
const cars = carMakers[0]
const myCar = carMakers.pop()

//Prevent incompatible values
// carMakers.push(100)

//Help with map
carMakers.map((cars: string):string => {
    return cars.toUpperCase()
})


console.log(carMakers)

//Flexible type
const importantDates: (Date | string)[] = []
importantDates.push('2021-04-08')
importantDates.push(new Date())
// importantDates.push(true)