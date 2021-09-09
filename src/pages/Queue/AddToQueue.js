import React, { useState } from 'react';
import './Queue.css'
import Queue from './Queue';
import addQueueAction from '../../actions/addQueueAction';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function AddToQueue(props){

    const dispatch = useDispatch();

    const [ subject, setSubject ] = useState('');
    const [ desc, setDesc ] = useState('');
    const [ classInfo, setClassInfo ] = useState('');
    const [ apptDate, setApptDate ] = useState('');
    const [ queueId, setQueueId ] = useState('');

    const submitQueue = async (e)=>{
        // console.log(subject);
        // console.log(desc);
        // console.log(classInfo);
        e.preventDefault();
        const url = `http://localhost:5000/api/create`;
        const data={
            subject: subject,
            desc: desc,
            classInfo: classInfo,
            apptDate: apptDate,
            queueId: queueId

        }
        const resp = await axios.post(url,data);
        console.log(data);
        dispatch(addQueueAction(resp.data));
        
    }

    return (
        <div className="col m12">
            <h3>Please fill out the form below</h3>
            <form onSubmit={submitQueue}>
                <div className="input-field col s6">
                    <div>
                        Subject
                        <input onChange={(e)=>setSubject(e.target.value)} value={subject} type="text" placeholder="Subject"/>
                    </div>
                    <div>
                        Description
                        <input onChange={(e)=>setDesc(e.target.value)} value={desc} type="text" placeholder="Enter a brief description"/>
                    </div>
                    <div>
                        Course
                        <input onChange={(e)=>setClassInfo(e.target.value)} value={classInfo} tyepe="text" placeholder="Course: (EX: CSE 210)" />
                    </div>
                    <div className="right">
                        <button className="waves-effect waves-light btn">Submit</button>
                    </div>
                </div>
       
                

            </form>
        </div>
    )
}

export default AddToQueue;