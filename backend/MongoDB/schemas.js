import mongoose from 'mongoose'

var today = new Date();
var date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
var time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
// var dateTime = `${date} ${time}`;

const queueSchema = mongoose.Schema({

    queueId: Number,
    visitorId: Number,
    visiteeId: Number,
    date: {
        type: String,
        default: date
    },
    time: {
        type: String,
        default: time
    },
    subject: String,
    desc: String,
    classInfo: String
})

const penguinQue = mongoose.model('penguinQue', queueSchema);

export default penguinQue