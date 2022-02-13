import mongoose from 'mongoose'

const schema = mongoose.Schema({
    userEmail: String,
    userName: String,
    content: String,
    subject: String,
    recieverEmail: String,
    id: String,
    date: String,
    photo: String
})

export default mongoose.model('email', schema)
