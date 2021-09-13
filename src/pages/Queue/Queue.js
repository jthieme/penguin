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

    

    const deleteQue = (queId) => {
        const headers = {
            "Authorization": "Bearer my-token"
        }
        axios.delete(`http://localhost:5000/api/delete=${queId}`, { headers }).then((response) => {
            console.log("success")
        }).catch((err) => {
            console.log("Failed")
            console.log(err.message)
            alert(queId + " is not valid")
        })

    }
    useEffect(() => {

        // deleteQue()
    }, [])

    return(
        <div className="account container-fluid">
            <QueueSideBar />
            <div className="row">
                <div className="col s8 offset-s3 top-m">
                    <Route exact path="/queue" render={()=>
                    <div>
                        {/* <h3 className="header">Queue List:</h3> */}
                        <QueueList header="Queue List:" />
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

