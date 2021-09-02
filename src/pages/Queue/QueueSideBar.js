import React, { Component } from 'react';
import './Queue.css';
import { Link } from 'react-router-dom'

function QueueSideBar(props){
    return(
        <ul className="sidenav sidenav-fixed">
            <li className="row">
                {/* <div className="col right">
                    <div className="close">&times;</div>
                </div> */}

            </li>
            <li>
                <Link to="/queue">Queue</Link>
            </li>
            <li>
                <Link to="/queue/current/hourly">Hourly Queue</Link>
            </li>
            <li>
                <Link to="/queue/current/today">Queue for Today</Link>
            </li>
            <li>
                <Link to="/queue/week">Queue for the Week</Link>
            </li>
            <li>
                <Link className="white-text" to="/queue/add">
                    <button className="waves-effect waves-light btn">
                        Add to Queue
                    </button>
                </Link>
            </li>
        </ul>
    )
}

export default QueueSideBar;