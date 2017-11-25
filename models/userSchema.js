import mongoose from 'mongoose'
let Schema = mongoose.Schema

let UserSchema = new Schema({
  name: String,
  desc: String
})

mongoose.model('User', UserSchema)