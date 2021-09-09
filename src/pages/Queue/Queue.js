import React, { useEffect, useState } from 'react';
import './Queue.css';
import QueueSideBar from './QueueSideBar';
import { Route } from 'react-router-dom'
import AddToQueue from './AddToQueue';
import QueueList from './QueueList';
import QueueCard from './QueueCard';
import QueueToday from './QueueToday';
import axios from 'axios';

function Queue(props){

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

    const deleteQue = (queId) => {
        const headers = {
            "Authorization": "Bearer my-token"
        }
        axios.delete(`http://localhost:5000/api/delete=${queId}`, { headers }).then((response) => {
            console.log("success")
        }).catch((err) => {
            console.log("Failed")
            console.log(err.message)
        })

    }
    useEffect(() => {

        deleteQue()
    }, [])

    return(
        <div className="account container-fluid">
            <QueueSideBar />
            <div className="row">
                <div className="col s8 offset-s3">
                    <Route exact path="/queue" render={()=>
                    <div>
                        <h3 className="header">Queue List:</h3>
                        {queueInfo.map((queueInfo) => (
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
                        }
                    

                    </div>

                    } />
                    <Route exact path="/queue/current/hourly" render={()=>
                        <h1>hourly queue</h1>
                    } />
                    <Route exact path="/queue/current/today" render={()=>
                        <QueueToday header="Queue for Today:"/>
                    } />
                    <Route exact path="/queue/week" render={()=>
                        <h1>queue for the week</h1>
                    } />
                    <Route exact path="/queue/add" component={AddToQueue} />
                    {/* <Route exact path="/account/reservations/past">
                        <Bookings type="past" bookings={pastBookings} />
                    </Route> */}
                    {/* <Route exact path="/account/change-pass" component={ChangePassword} /> */}
                </div>
            </div>
        </div>
        // <h1>Account</h1>
    )
}

export default Queue;

