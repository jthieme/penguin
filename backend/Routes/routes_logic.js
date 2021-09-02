import PenguinQue from '../MongoDB/schemas.js';
import UserSchema from '../MongoDB/user_schema.js';


export const findQue = async (req, res) => {
    // res.status(200).send('Helloo Penguin')
    try {
        // find all the queue inthe DB
        const allQue = await PenguinQue.find()
        // console.log(allQue)
        // console.log("hello")
        /********************************************** 
        // this is for sending specific items from the data base
        const need_info = allQue.map((que_info) => {
            const { date, time, _id, queueId } = que_info
            console.log(date, _id, time)
            return { date, time, _id, queueId }
        })
        res.status(200).json(need_info)
        ******************************************/
        res.status(200).json(allQue)

    } catch (error) {
        console.log(error.message)

    }
}

export const createQue = async (req, res) => {
    // res.status(200).send('Helloo Penguin')

    //whatever request you get, it will be stored
    // this res.body and then into the Penqueue
    const queueInfo = req.body

    // we will pass the body request that 
    // came form the client to the database
    const myQue = PenguinQue(queueInfo);
    try {
        // this will save the info into the database
        await myQue.save()

        res.status(201).json(myQue);
    } catch (error) {
        // send an error to the response 
        res.status(401).send({ message: error.message })
    }

}


export const find_by_que_id = async (req, res) => {
    try {
        // // MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});
        // const find_que = await PenguinQue.find({ queueId: 1 })
        // res.status(200).send(find_que)
        console.log(req.params)
        const { queId } = req.params
        const specificQue = await PenguinQue.find({ queueId: queId })
        if (specificQue.length < 1) {
            return res.status(200).json({ sucess: true, data: [], comment: 'Queue Does not exist' })
        }
        return res.json(specificQue)

    } catch (error) {
        res.status(401).send({ message: error.message })

    }

}

export const today_que = async (req, res) => {
    try {
        var date = new Date();
        var toda_y = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        console.log('today is :', toda_y)
        // MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});
        const find_que = await PenguinQue.find({
            date: toda_y
        })
        res.status(200).send(find_que)

    } catch (error) {
        res.status(401).send({ message: error.message })

    }


}
/**Resgistering a user */

export const register = async (req, res) => {
    const queueInfo = req.body
    console.log(req.body)

    // we have to bcrypt the password

    try {
        const newUser = UserSchema(req.body)
        await newUser.save()


    } catch (error) {
        // send an error to the response 
        res.status(401).send({ message: error.message })
        console.log(error.message)
    }
    // console.log(req.body)
    // // hashing the password
    // // using bcrypt - npm i bcrypt
    // const { userName, email, password } = req.body
    // const password1 = await bcrypt.hash(password, 10)
    // res.status(200).send(res.body)


    // try {
    //     const user = await userSchema.create({
    //         userName,
    //         email,
    //         password,
    //     })
    //     user.save()
    //     res.status(201).json(user);
    //     console.log('User Created')

    // } catch (error) {
    //     res.status(401).send({ message: error.message })
    // }

}