const carMakers = ["ford", "toyota", "chevy"]
const dates = [new Date(), new Date()]

const carsByMake: string[][] = []

// Help with inference when extracting values
const cars = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible values
// - Uncomment below statement to check the prevention
// carMakers.push(100)

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase()
})

// Flexible Types
const importantDates: (Date | String)[] = []
importantDates.push("08/11/2022")
importantDates.push(new Date())
