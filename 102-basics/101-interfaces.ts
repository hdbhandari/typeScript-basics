interface Reportable {
  summary(): string
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  },
}

const coldDrink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My coldDrink has ${this.sugar} grams of sugar`
  },
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

printSummary(oldCivic)
printSummary(coldDrink)
