

import PenguinQue from '../MongoDB/schemas.js';



export const findQue = async (req, res) => {
    // res.status(200).send('Helloo Penguin')
    try {
        // find all the queue inthe DB
        const allQue = await PenguinQue.find()
        res.status(200).send(allQue)

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
    var date = new Date();
    const today = date.getDate()

    try {
        // MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});
        const find_que = await PenguinQue.find({ queueId: 1 })
        res.status(200).send(find_que)

    } catch (error) {
        res.status(401).send({ message: error.message })

    }

}