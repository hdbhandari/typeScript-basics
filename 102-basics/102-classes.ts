class Vehicle {
  // By declaring color as public, it will declare a variable
  // which will act as class variable
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep")
  }
}

const vehicle = new Vehicle("orange")
console.log(vehicle.color)

class MyCar extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  }

  private drive(): void {
    console.log("vroom")
  }

  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const myCarObj = new MyCar(4, "red")
myCarObj.startDrivingProcess()
