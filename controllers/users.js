import mongoose from 'mongoose'
let User = mongoose.model('User')

exports.getAllUsers = function(request, response) {
  User.find({}, function(error, results) {
    return response.send(results)
  })
}

exports.createData = function(request, response) {
  User.create(
    {
      'name': 'Jaquan Krajcik',
      'desc': 'Aut provident voluptatem sunt quae sed voluptatem quia sed.'
    },
    {
      'name': 'Eriberto Herzog',
      'desc': 'Magni odit dolores repellat.'
    },
    {
      'name': 'Mia Rolfson',
      'desc': 'Perferendis magnam est voluptas.'
    },
    function(error) {
      return (error) ? console.log(error) : response.sendStatus(202)
    }
  )
}

exports.createUser = function(request, response) {
  User.create(
    request.body,
    function(error, user) {
      console.log(request.body)
      return (error) ? console.log(error) : response.send(user)
    }
  )
}

exports.findById = function(request, response) {
  User.find({
    _id: request.params.id
  }, function(error, results) {
    return response.send(results)
  })
}

exports.deleteUser = function(request, response) {
  User.remove({
    _id: request.params.id
  }, function(error) {
    return (error) ? console.log(error) : response.sendStatus(202)
  })
}

exports.updateById = function(request, response) {

  if (request.body === undefined || request.body === null) {
    return response.sendStatus(401)
  }

  User.update({
    _id: request.params.id
  },
    request.body,
    function(error, amountUpdated) {
      if (error) {
        return console.log(error)
      }

      console.log(`Updated ${amountUpdated} users`)
      return response.sendStatus(202)
    })
}