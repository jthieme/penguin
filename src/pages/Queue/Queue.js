import React, { useEffect, useState } from 'react';
import './Queue.css';
import QueueSideBar from './QueueSideBar';
import { Route } from 'react-router-dom'
import AddToQueue from './AddToQueue';
import QueueList from './QueueList';
import QueueCard from './QueueCard';
import axios from 'axios';

function Queue(props){

    const [ queueList, setQueueList ] = useState('');

    useEffect(()=>{
        const queueCardUrl = `http://localhost:3000/queue`;

        const queuePromises = [];
        async function getData(){
            queuePromises.push(axios.get(queueCardUrl))

            const resp = await Promise.all(queuePromises);
            setQueueList(resp[0].data);
        }
        getData();
    },[])

    return(
        <div className="account container-fluid">
            <QueueSideBar />
            <div className="row">
                <div className="col s8 offset-s3">
                    <Route exact path="/queue" render={()=>
                        <QueueCard queueList={queueList} />
                        // <QueueList queueList={queueList} />
                    } />
                    <Route exact path="/queue/current/hourly" render={()=>
                        <h1>hourly queue</h1>
                    } />
                    <Route exact path="/queue/current/today" render={()=>
                        <h1>queue for today</h1>
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