import { fakeDbBurgers } from '../db/fakeDbBurgers'
import { BadRequest } from '../utils/Errors'

class BurgersService {
  getAll() {
    return fakeDbBurgers.burgers
  }

  getById(id) {
    const burger = fakeDbBurgers.burgers.find(b => b.id.toString() === id)
    if (!burger) {
      throw new BadRequest('Invalid Burger ID')
    }
    return burger
  }

  create(body) {
    fakeDbBurgers.burgers.push(body)
    return body
  }

  edit(body) {
    let old = this.getById(body.id)
    old = { ...old, ...body }
    this.delete(old.id)
    fakeDbBurgers.burgers.push(old)
    return old
  }

  delete(id) {
    const index = fakeDbBurgers.burgers.findIndex(b => b.id.toString() === id)
    if (index < -1) {
      throw new BadRequest('Invalid Burger ID')
    }
    fakeDbBurgers.burgers.splice(index, 1)
  }
}

export const burgersService = new BurgersService()
