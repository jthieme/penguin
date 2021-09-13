import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import openModal from '../../actions/openModal';
import logoutAction from '../../actions/logoutAction';
import Login from '../../pages/Login/Login';
import SignUp from '../../pages/Login/SignUp';
import Queue from '../../pages/Queue/Queue';
import penguin from '../../images/penguin.png'


function NavBar(props){

    const dispatch = useDispatch();
    const email = useSelector(state=>state.auth.email);
    // const token = useSelector(state=>state.auth.token);

    useEffect(()=>{
        dispatch(openModal('closed',''));
    },[])




    let navColor = 'black';
    
    return(<div className="container-fluid nav nav-fixed">
        <div className="row">
            <nav className={navColor}>
                <div className="nav-wrapper">
                    <Link to="/" className="left"><img className="nav-penguin" src={penguin} alt="penguin" /></Link>
                    <ul id="nav-mobile" className="right">

                        {email
                            ?   <span> 
                                    <li><Link to="/queue">My Queue</Link></li>
                                    <li><Link to="/">Hello, {email}</Link></li>
                                    <li onClick={()=>dispatch(logoutAction())}>Logout</li>
                                </span>
                            :   <span>
                                    <li><Link to="/account">Account</Link></li>
                                    <li><Link to="/queue">Queue</Link></li>
                                    <li className="login-signup" onClick={()=>dispatch(openModal('open',<SignUp />))}>Sign Up</li>
                                    <li className="login-signup" onClick={()=>dispatch(openModal('open',<Login />))}>Log in</li>
                                </span>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    )

}




export default NavBar;
