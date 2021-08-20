import React from 'react';
import QueueCard from './QueueCard';
import Queue from './Queue';

function QueueList(props){
    const queueList = props.queueList.map((queueCard, i)=>{
        return(
            <div key={i} className="col s3">
                <QueueCard queueCard={queueCard} key={i} />
            </div>
        )
    })
    return (
        <div className="card horizontal">
            {queueList}
        </div>
    )
}

export default QueueList;