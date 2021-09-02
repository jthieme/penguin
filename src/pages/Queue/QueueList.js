import React from 'react';
import QueueCard from './QueueCard';
import Queue from './Queue';
import { Component } from 'react';
import AddToQueue from './AddToQueue';

function QueueList(props){
    console.log(props)
    const data = props.queueList;
    
    // <QueueCard data={data} />
    for (var i = 0; i < data[i]; i++){
        return(
            <div className="col s12">
                <QueueCard queueCard={data}/>
            </div>
        )
    }
    return (
        <div>
            {data}
        </div>
    )
    
}

export default QueueList;