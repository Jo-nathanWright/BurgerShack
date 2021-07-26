import BaseController from '../utils/BaseController'
import { burgersService } from '../services/BurgersService'

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAll)
      // .post('', this.create)
  }

  getAll(req, res, next) {
    try {
      const burgers = burgersService.getAll()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }
}
