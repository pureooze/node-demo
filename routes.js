import users from './controllers/users'
import rooms from './controllers/rooms'
import userSchema from './models/userSchema'

module.exports = function(app) {
  app.get('/users', users.getAllUsers)
  app.get('/users/find-by-id/:id', users.findById)
  app.put('/users/update-by-id/:id', users.updateById)
  app.post('/users/create', users.createUser)
  app.put('/users/delete-by-id/:id', users.deleteUser)
  app.get('/users/import', users.createData)

  app.get('/rooms/import', rooms.createData)
  app.get('/rooms', rooms.getAllRooms)
  app.post('/rooms/create', rooms.createRoom)
  app.put('/rooms/update-by-id/:id', rooms.updateRoom)
}