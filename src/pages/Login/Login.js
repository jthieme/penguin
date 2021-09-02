import React, {useState} from 'react';
import './Login.css';
import {useDispatch} from 'react-redux';
import openModal from '../../actions/openModal';
import SignUp from './SignUp';
import axios from 'axios';
// import regAction from '../../actions/regAction'
// import swal from 'sweetalert'

function Login(props){

    const dispatch = useDispatch();

    const [username, changeUsername] = useState('')
    const [email, changeEmail] = useState('')
    const [password, changePassword] = useState('')


    const submitLogin = async(e)=>{
        e.preventDefault();
        console.log(username);
        console.log(email);
        console.log(password);
        // console.log(resp);

        const url = `http://localhost:5000/api/register`;
        const data = {
            username: username,
            email: email,
            password: password
        }
        const resp = await axios.post(url,data);
        // const token = resp.data.token;
                


        
    //     // -- noEmail
    //     if(resp.data.msg === "noEmail"){
    //         swal({
    //             title: "That email is not registered.",
    //             icon: "error",
    //           })
    //     // -- badPass
    //     }else if(resp.data.msg === "badPass"){
    //         swal({
    //             title: "Invalid email/password",
    //             text: "We don't have a match for that user name and password.",
    //             icon: "error",
    //           })
    //     // -- loggedIn
    //     }else if(resp.data.msg === "loggedIn"){
    //         swal({
    //             title: "Success!",
    //             icon: "success",
    //           });
    //         // we call our register action to update our auth reducer!!
    //         dispatch(regAction(resp.data));
    //     }
    }


    return(
        <div className="login-form">
            <form onClick={submitLogin}>
                <button className="facebook-login">Connect With Facebook</button>
                <button className="google-login">Connect With Google</button>
                <div className="login-or center">
                    <span>or</span>
                    <div className="or-divider"></div>
                </div>
                <input onChange={(e)=>changeUsername(e.target.value)} value={username} type="text" className="browser-default" placeholder="Username" />
                <input onChange={(e)=>changeEmail(e.target.value)} value={email} type="text" className="browser-default" placeholder="Email address" />
                <input onChange={(e)=>changePassword(e.target.value)} value={password} type="password" className="browser-default" placeholder="Password" />
                <button className="sign-up-button">Login</button>
                <div className="divider"></div>
                <div>Don't have an account? <span className="pointer" onClick={()=>dispatch(openModal('open',<SignUp />))}>Sign up</span></div>
            </form>
        </div>
    )


}



export default Login;
