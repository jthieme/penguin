import React, {useEffect, useState} from 'react';
import './Queue.css'
import AddToQueue from './AddToQueue';
import {Link} from 'react-router-dom'
import axios from 'axios';


function QueueCard(props){

    // const [ qData, setQData ] = useState('')

    const qData = props.queueList;
    console.log(props)

    // console.log(props)

    // useEffect(()=>{
    //     if (props.queueList === '' || props.queueList === 'undefined'){
    //         const queueCardUrl = `http://localhost:5000/api/find`;

    //         const queuePromises = [];
    //         async function getData(){
    //         queuePromises.push(axios.get(queueCardUrl))

    //         const resp = await Promise.all(queuePromises);
    //         console.log(resp);
    //         const data = resp[0].data[16];
    //         setQData(data);
    //         }
    //         getData();
    //     }
    //     else{
    //         console.log(props.todayData)
    //     }
        
    // },[])

    return(
        
        <div className="col s12 m7">
            {/* <div>{props.queueList}</div> */}
        <h3 className="header">{props.header}</h3>
        <div className="card horizontal">
          <div className="card-image">
            <img src="https://lorempixel.com/100/100/nature/6"/>
          </div>
          <div className="card-stacked">
            <div className="card-content">
            <div className="card-name">
                {qData.date 
                ?
                    <h5>
                        {qData.date}
                    </h5>
                : <h4>name goes here</h4>}
                </div>
              <div>
                {qData.subject 
                ?
                    <h5>
                        {qData.subject}
                    </h5>
                : <h5>subject goes here</h5>}
                </div>
            
                <div>
                    {qData.desc 
                    ?
                    <p>
                        {qData.desc}
                    </p>
                    : <p>desc goes here</p>}
                </div>
            
                <div>
                    {qData.classInfo 
                    ?
                    <p>
                        {qData.classInfo}
                    </p>
                    : <p>class info goes here</p>}
                </div>
                
                <button className="col m4 waves-effect waves-light btn right">
                    <Link to="/" className="white-text">Message</Link>
                </button>
                <button className="col m4 waves-effect waves-light btn">
                    <Link to="/" className="white-text">Zoom</Link>
                </button>
            
            </div>
            
          </div>
        </div>
      </div>
      
    )
    
}

export default QueueCard;