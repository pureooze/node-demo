import users from './node-demo-ws/users'
import userSchema from './models/userSchema'

module.exports = function(app) {
  app.get('/users', users.getAllUsers)
  app.get('/users/find-by-id/:id', users.findById)
  app.put('/users/update-by-id/:id', users.updateById)
  app.post('/users/create', users.createUser)
  app.put('/users/delete-by-id/:id', users.deleteUser)
  app.get('/import', users.createData)
}