import { faker } from "@faker-js/faker"
import { Mappable } from "./CustomMap"

export class User implements Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = faker.name.firstName()
    // The initialization of lat/lng will not work with below statement
    // Because when we will be writing this.location, till that time this.location is undefined
    // this.location.lat = "some-value"

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
}
