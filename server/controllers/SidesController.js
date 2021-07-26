import BaseController from '../utils/BaseController'
import { sidesService } from '../services/SidesService'

export class SidesController extends BaseController {
  constructor() {
    super('api/sides')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
  }

  getAll(req, res, next) {
    try {
      const sides = sidesService.getAll()
      res.send(sides)
    } catch (error) {
      next(error)
    }
  }

  getById(req, res, next) {
    try {
      const side = sidesService.getById(req.params.id)
      res.send(side)
    } catch (error) {
      next(error)
    }
  }
}
