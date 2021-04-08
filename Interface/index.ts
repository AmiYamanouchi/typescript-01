interface Vehicle {
    name:string;
    year:number;
    broken:boolean;
    summary(): string;
}

interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string{
        return `Name ${this.name}`
    }
}

const drink = {
    color: 'brown',
    carbonate: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar}g of sugar`
    }
}

//インターフェース使わないバージョン
// const printVehicle = (vehicle: {name:string, year:number, broken:boolean}):void => {
//     console.log(`Name: ${vehicle.name}`)
//     console.log(`Year: ${vehicle.year}`)
//     console.log(`Broken: ${vehicle.broken}`)
// }

//インターフェースバージョン
const printVehicle = (vehicle: Vehicle ):void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`)
    console.log(`Broken: ${vehicle.broken}`)
    console.log(vehicle.summary())
    
}

const printSummary = (item:Reportable):void => {
    console.log(item.summary());
    
}

// printVehicle(oldCivic)
printSummary(drink)