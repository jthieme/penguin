import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QueueCard from './QueueCard';

function QueueToday(props){

    const [todayQ, setTodayQ] = useState('')

    var today = new Date();
    var todayDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    // console.log(todayDate)

    // axios.get('http://localhost:5000/api/today').then((res)=>{
    //     if (res.data.date === todayDate){

    //         const todayQ = res.data.map((i)=>{

    //             console.log(todayQ[i])
    //         })
    //     }
    // })

    useEffect(() =>{
        function getData(){
            axios.get('http://localhost:5000/api/find').then((res)=>{
            console.log(res)
            res.data.map((i)=>{
                if (res.data[i] === todayDate){
                    const data = res.data[32];
    
                    setTodayQ(data);
                }
            })
            
        })
        }
        getData();
        
    },[])

    console.log(todayQ)
    return(
        <QueueCard todayData={todayQ} />
    )
}

export default QueueToday;