import { faker } from "@faker-js/faker"
import { Mappable } from "./CustomMap"

export class Company implements Mappable {
  companyName: string
  companyPhrase: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.companyName = faker.company.name()
    this.companyPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }
  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>Catchphrase: ${this.companyPhrase}</h3>
      </div>
    `
  }
}
