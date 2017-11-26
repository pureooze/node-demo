import mongoose from 'mongoose'
let Schema = mongoose.Schema

let RoomSchema = new Schema({
  name: String,
  desc: String,
  portals: Array
})

mongoose.model('Room', RoomSchema)