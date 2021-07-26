import { fakeDbSides } from '../db/fakeDbSides'
import { BadRequest } from '../utils/Errors'

class SidesService {
  getAll() {
    return fakeDbSides.sides
  }
}

export const sidesService = new SidesService()
