import React ,{ useState, useEffect } from 'react';
import axios from 'axios';
import QueueCard from './QueueCard';
import Queue from './Queue';
import deleteQue from './Queue'
import addQueueAction from '../../actions/addQueueAction';

function QueueList(props){

    const [queueInfo, setqueueInfo] = useState([])

    const getQue = () => {
        // the backend and the front end are both running on different server
        // so when the client clicke on the button a post is send to the backend
        // 
        axios.get('http://localhost:5000/api/find').then((response) => {
            const queueInfomation = response.data
            setqueueInfo(queueInfomation)
            console.log(queueInfomation)
            // setqueueInfo({ ...queueInfo, queueId: queueInfomatio })

        })
    }
    useEffect(() => {
        getQue();
    }, []);

    console.log(props)

    return(
        <div>
            <h3>{props.header}</h3>
        </div>,
        queueInfo.map((queueInfo) => (
            <div className="col s12 m7">
                
                    <div className="card horizontal">
                    <div className="card-image">
                        <img src="https://lorempixel.com/100/100/nature/6"/>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">

                            <div className='card-name'>
                                <h5>{queueInfo.subject}</h5>
                                <h5>{queueInfo.desc}</h5>
                                <h5>{queueInfo.classInfo}</h5>
                                <h6>Creation Date: {queueInfo.date}</h6>
                                <h6>Creation Time: {queueInfo.time}</h6>
                                <button className="col m4 waves-effect waves-light btn right" onClick={() => deleteQue(queueInfo._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
            ))
            
    
    )
    
}

export default QueueList;