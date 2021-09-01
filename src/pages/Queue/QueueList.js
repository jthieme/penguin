import React from 'react';
import QueueCard from './QueueCard';
import Queue from './Queue';
import { Component } from 'react';
import AddToQueue from './AddToQueue';

class QueueList extends Component{
    render(){
        console.log(this.props)
        const data = this.props.queueList[0];
        
        <QueueCard data={data} />
        // const queueList = this.props.queueList.map((queueCard, i)=>{
        //     return(
        //         <div key={i} className="col s3">
        //             <QueueCard queueCard={queueCard}/>
        //         </div>
        //     )
        // })
        return (
            <div className="card horizontal">
                {/* {queueList} */}
            </div>
        )
    }
}

export default QueueList;