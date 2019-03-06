const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')
const guesthMiddleware = require('./app/middlewares/guest')

const UserContoller = require('./app/controllers/UserController')
const SessionContoller = require('./app/controllers/SessionController')
const DashboardContoller = require('./app/controllers/DashboardController')
const FilleController = require('./app/controllers/FilleController')
const AppoinmentController = require('./app/controllers/AppoinmentController')
const AvailableController = require('./app/controllers/AvailableController')

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success')
  res.locals.flashError = req.flash('error')

  return next()
})

routes.get('/files/:file', FilleController.show)

routes.get('/', guesthMiddleware, SessionContoller.create)
routes.post('/signin', SessionContoller.store)

routes.get('/signup', guesthMiddleware, UserContoller.create)
routes.post('/signup', upload.single('avatar'), UserContoller.store)

routes.use('/app', authMiddleware)

routes.get('/app/logout', SessionContoller.destroy)

routes.get('/app/dashboard', DashboardContoller.index)

routes.get('/app/appointments/new/:provider', AppoinmentController.create)
routes.post('/app/appointments/new/:provider', AppoinmentController.store)
routes.get('/app/available/:provider', AvailableController.index)

module.exports = routes
