import React from 'react';
import './Queue.css'
import AddToQueue from './AddToQueue';
import {Link} from 'react-router-dom'

function QueueCard(props){
    console.log(props.subject);
    console.log(props.desc);
    console.log(props.classInfo);
    
    return(
        <div className="col s12 m7">
        <h3 className="header">Queue List:</h3>
        <div className="card horizontal">
          <div className="card-image">
            <img src="https://lorempixel.com/100/100/nature/6"/>
          </div>
          <div className="card-stacked">
            <div className="card-content">
            <div className="card-name">
                {props.name 
                ?
                    <h5>
                        {props.name}
                    </h5>
                : <h4>name goes here</h4>}
                </div>
              <div>
                {props.subject 
                ?
                    <h5>
                        {props.subject}
                    </h5>
                : <h5>subject goes here</h5>}
                </div>
            
                <div>
                    {props.desc 
                    ?
                    <h5>
                        {props.desc}
                    </h5>
                    : <p>desc goes here</p>}
                </div>
            
                <div>
                    {props.classInfo 
                    ?
                    <h5>
                        {props.classInfo}
                    </h5>
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