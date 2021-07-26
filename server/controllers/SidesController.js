import BaseController from '../utils/BaseController'
import { sidesService } from '../services/SidesService'

export class SidesController extends BaseController {
  constructor() {
    super('api/sides')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .delete('/:id', this.delete)
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

  create(req, res, next) {
    try {
      const side = sidesService.create(req.body)
      res.send(side)
    } catch (error) {
      next(error)
    }
  }

  edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const side = sidesService.edit(req.body)
      res.send(side)
    } catch (error) {
      next(error)
    }
  }

  delete(req, res, next) {
    try {
      sidesService.delete(req.params.id)
      res.send('Off the Menu')
    } catch (error) {
      next(error)
    }
  }
}
