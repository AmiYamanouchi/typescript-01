const profile = {
    nickName: 'Ami',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age:number): void{
        this.age = age;
    }
}

// interface Profile {age: number; nickName:string}

const {age, nickName}:{age:number; nickName: string} = profile
const {coords: {lat, lng}}: {coords: {lat: number; lng:number}} = profile

console.log(`My name is ${nickName} and I'm ${age} years old`)