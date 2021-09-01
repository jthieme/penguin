import React from 'react';
import QueueCard from './QueueCard';
import Queue from './Queue';
import { Component } from 'react';
import AddToQueue from './AddToQueue';

function QueueList(props){
    console.log(props)
    const data = props.queueList;
    
    // <QueueCard data={data} />
    for (var i = 0; i < data.length; i++){
        return(
            <div key={i} className="col s12">
                <QueueCard queueCard={data}/>
                {console.log(data)}
            </div>
        )
    }
    return (
        <div>
            {data[i]}
        </div>
    )
    
}

export default QueueList;