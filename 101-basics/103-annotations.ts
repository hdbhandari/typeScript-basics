// When to use annotations
// 1) Function that returns the any type
const json = '{"x":10, "y":20}'

/* 

  Here the inference type of coordinates is any
  it is because JSON.parse method will return 'any'
  There are multiple methods in JS which will return 'any'

  const coordinates = JSON.parse(json)
*/
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates)

// 2) When we declare a variable in one line and initializa it later
let words = ["red", "green", "blue"]
let isFound: boolean
for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    isFound = true
  }
}

// 3)	When a variable’s type can’t be inferred
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}
