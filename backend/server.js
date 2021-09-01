import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
// import our router
import router from './Routes/routes.js'
// an instance of the express server/package
const app = express()
app.use(cors());
app.use(express.json())
// it is be accesses by localhost:5000/queue then the endpoint
app.use('/api', router)
// sets the size pf the json that we will send
app.use(bodyParser.json({ limit: '20mb', extended: true }))
// does the same but for the url
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))


// this is the connection url for the database
const connectionUrl = 'mongodb+srv://leon:narineLDS21@tinderclone.fel1b.mongodb.net/tinder-clone?retryWrites=true&w=majority'

// define port for server
const PORT = 5000

// connect to the database, using mongoose
mongoose.connect(connectionUrl, {
    // helps to avoid errr=ors and warnings 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () => {
    console.log(`Server Connected on ${PORT}...`)
})).catch((error) => console.log(error.message))


// ingonre warnings in the console
mongoose.set('useFindAndModify', false)