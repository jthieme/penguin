import React, { useState, useEffect } from 'react';
import './Account.css';
import { useSelector, shallowEqual } from 'react-redux'
import axios from 'axios';
import moment from 'moment';
import { Route } from 'react-router-dom'
import AccountSideBar from './AccountSideBar';
import AccountNames from './AccountNames';


// import ChangePassword from './ChangePassword'

function Account(props){

    // const token = useSelector(state => state.auth.token, shallowEqual);

    // const [ pastBookings, setPastBookings ] = useState([])
    // const [ upcomingBookings, setUpcomingBookings ] = useState([])


    // useEffect(()=>{
    //     const accountUrl = `http://localhost:3000/account`;
    //     const data = {
    //         token: token,
    //     }
    //     const fetchAccountData = async()=>{
    //         const resp = await axios.post(accountUrl,data);
    //         console.log(resp.data);
    //         let pastBookings = []
    //         let upcomingBookings = [];
    //         resp.data.forEach(booking => {
    //             const today = moment(); //get today's date so we know what is past and what is future
    //             const checkOutDate = moment(booking.checkOut);
    //             const diffDays = checkOutDate.diff(today,"days");
    //             if(diffDays < 0){
    //                 pastBookings.push(booking);
    //             }else{
    //                 upcomingBookings.push(booking);
    //             }
    //         });

    //         setPastBookings(pastBookings)
    //         setUpcomingBookings(upcomingBookings)
    //     };
    //     fetchAccountData();
    // },[])

    // console.log(pastBookings);
    // console.log(upcomingBookings);

    const [changeNames, setChangeNames] = useState('')
    const [fName, setFName] = useState('Josh');
    const [lName, setLName] = useState('Thieme');

    useEffect(()=>{
        setChangeNames(
            <button 
                type="button" 
                onClick={showInputs} 
                className="waves-effect waves-light btn-small">
                Edit
            </button>)
    },[])

    const showInputs = ()=>{
        setChangeNames(
            <AccountNames
                setFName={(e)=>setFName(e.target.value)}
                setLName={(e)=>setLName(e.target.value)}
            />
        )
    }



    return(
        <div className="account container-fluid">
            <AccountSideBar />
            <div className="row">
                <div className="col s8 offset-s3">
                    <Route exact path="/account" render={()=>
                        <div className="col m8">
                            <div>
                                <h4>{fName} {lName}</h4>
                                <span>{changeNames}</span>                                
                            </div>
                            <div className="divider"></div>
                            <div>
                                <h5>Select Your Role</h5>
                                <div className="col m4 ">
                                    <select className="browser-default" value="Null">
                                        <option value="Professor">Professor</option>
                                        <option value="Student">Student</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    } />
                    <Route exact path="/account/placeholder/ph" render={()=>
                        <h1>Test</h1>
                    } />
                    <Route exact path="/account/placeholder/p" render={()=>
                        <h1>Test 2</h1>
                    } />
                    <Route exact path="/account/change-pass" render={()=>
                        <h1>Test 3</h1>
                    } />
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


export default Account;