import mongoose from 'mongoose'
let Schema = mongoose.Schema

let PortalSchema = new Schema({
  name: String,
  desc: String,
})

mongoose.model('Portal', PortalSchema)