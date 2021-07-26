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

  create(body) {
    fakeDbSides.sides.push(body)
    return body
  }

  edit(body) {
    let old = this.getById(body.id)
    old = { ...old, ...body }
    this.delete(old)
    fakeDbSides.sides.push(old)
    return old
  }

  delete(id) {
    const index = fakeDbSides.sides.findIndex(s => s.id.toString() === id)
    if (index < -1) {
      throw new BadRequest('We cannot delete a side that doesn\'t exist')
    }
    fakeDbSides.sides.splice(index, 1)
  }
}

export const sidesService = new SidesService()
