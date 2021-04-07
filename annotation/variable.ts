
//Ex.1
const json = '{"x":10, "y":20}'
const coordinates: {x:number, y:number} = JSON.parse(json)
console.log(coordinates)


//Ex.2
let colors = ['red', 'green', 'blue']
let foundColor

for(let i=0; i < colors.length; i++){
    if(colors[i] === 'green'){
        foundColor = true
    }
}
console.log(foundColor)

//Ex.3
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        numberAboveZero = numbers[i]
    }
}
console.log(numberAboveZero);
