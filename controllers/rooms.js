import mongoose from 'mongoose'
let Room = mongoose.model('Room')

exports.createData = function(request, response) {
  Room.create(
    {
      name: "Entry Room",
      desc: "This is the entry room",
      portals: []
    },
    {
      name: "Second Room",
      desc: "This is the second room",
      portals: []
    },
    function(error) {
      return (error) ? console.log(error) : response.sendStatus(202)
    }
  )
}

exports.getAllRooms = function(request, response) {
  Room.find(function(error, result) {
    return (error) ? console.log(error) : response.send(result)
  })
}

exports.createRoom = function(request, response) {
  Room.create(request.body, function(error, result) {
    return (error) ? console.log(error) : response.send(result)
  })
}

exports.updateRoom = function(request, response) {
  Room.update({
    _id: request.params.id
  }, request.body, function(error, result) {
    return (error) ? console.log(error) : response.send(result)
  })
}