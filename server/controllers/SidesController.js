import BaseController from '../utils/BaseController'
import { sidesService } from '../services/SidesService'

export class SidesController extends BaseController {
  constructor() {
    super('api/sides')
    this.router
      .get('', this.getAll)
  }

  getAll(req, res, next) {
    try {
      const sides = sidesService.getAll()
      res.send(sides)
    } catch (error) {
      next(error)
    }
  }
}
