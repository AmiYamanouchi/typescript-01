class Vehicle {
    // public drive():void {
    //     console.log('yooo')
    // }

    protected honk():void {
        console.log('heeee')
    }
}



const vehicle = new Vehicle()



class Car extends Vehicle{

    // プライベートだからこの状態では外で使えないけど
    private drive():void {
        console.log('choo choo')
    }

    // このようにして使用すれば外で使えるようになる
    startDrivingProcess():void {
        this.drive()
        this.honk()
    }
}

const car = new Car()
//これは外で使うとエラーが出る
// car.drive()
// これは変更して使ってるから外で使える
car.startDrivingProcess()
// car.honk()
