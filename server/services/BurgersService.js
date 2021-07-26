import { fakeDb } from '../db/fakeDb'

class BurgersService {
  getAll() {
    return fakeDb.burgers
  }
}

export const burgersService = new BurgersService()
