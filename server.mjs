import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Email from './cards.mjs'

const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.status(200).send('Hey')
})

const url = 'mongodb://atulit23:sanjayashaS28@cluster0-shard-00-00.cwga6.mongodb.net:27017,cluster0-shard-00-01.cwga6.mongodb.net:27017,cluster0-shard-00-02.cwga6.mongodb.net:27017/gmail-new-db?ssl=true&replicaSet=atlas-laoibc-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())

app.post('/emails', (req, res) => {
    const emailCard = req.body
    Email.create(emailCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/emails', (req, res) => {
    Email.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.delete('/emails/:id', (req, res) => {
    const id = req.params.id
    Email.findByIdAndDelete({_id: id}, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(202).send(data)
        }
    })
})

app.listen(port, () => console.log(`listening on port ${port}`))
