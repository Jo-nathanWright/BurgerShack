import { fakeDbSides } from '../db/fakeDbSides'
import { BadRequest } from '../utils/Errors'

class SidesService {
  getAll() {
    return fakeDbSides.sides
  }

  getById(id) {
    const side = fakeDbSides.sides.find(s => s.id.toString() === id)
    if (!side) {
      throw new BadRequest('We don\'t have that Side')
    }
    return side
  }
}

export const sidesService = new SidesService()
