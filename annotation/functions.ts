//Ex.1
const add = (a:number,b:number):number|string => {
    return a + b + '10'
}
console.log(add(2,3))



//Ex.2
const logger = (message:string):void => {
    console.log(message);
    // return message + '!!!!!!'
}
logger('Hello there')



//Ex.3
const throwError = (message:string):void => {
    if(!message){
        throw new Error(message)
    }
}
throwError('test')


//Ex.4
const todaysWeather = {
    date: new Date(),
    weather: 'rainy'
}

const logWeather = ({date,weather}:{date:Date; weather:string}):void => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather)