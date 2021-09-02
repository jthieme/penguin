
import mongoose from 'mongoose'

// var today = new Date();
// var date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
// var time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
// var dateTime = `${date} ${time}`;

const loginSchema = mongoose.Schema({

    userName: { type: String },
    email: { type: String },
    password: { type: String },
})

const UserSchema = mongoose.model('userSchema', loginSchema);

export default UserSchema