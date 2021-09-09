import React, {useState, useEffect} from 'react';
import SignUpInputFields from './SignUpInputFields';
import openModal from '../../actions/openModal';
import {useDispatch, useSelector} from 'react-redux';

import Login from './Login'
import axios from 'axios';
// import swal from 'sweetalert';

function SignUp(props){
    
    const dispatch = useDispatch();

    const [ lowerPartOfForm, setLowerPartOfForm ] = useState('')
    const [ username, changeUsername] = useState('')
    const [ email, changeEmail ] = useState('')
    const [ password, changePassword ] = useState('')

    useEffect(()=>{
        setLowerPartOfForm(
            <button 
                type="button" 
                onClick={showInputs} 
                className="sign-up-button">
            Sign up with email
            </button>)
    },[])

    const showInputs = ()=>{
        setLowerPartOfForm(
            <SignUpInputFields
                changeUsername={(e)=>changeUsername(e.target.value)}
                changeEmail={(e)=>changeEmail(e.target.value)}
                changePassword={(e)=>changePassword(e.target.value)}
            />
        )
    }

    const submitLogin = async(e)=>{
        e.preventDefault();
        console.log(username);
        console.log(email);
        console.log(password);

        const url = `http://localhost:5000/api/register`;
        const data = {
            username: username,
            email: email,
            password: password
        }
        const resp = await axios.post(url,data);
        // const token = resp.data.token;
        console.log(resp)
    }
    
    return(
        <div className="login-form">
            <form onSubmit={submitLogin}>
                <button className="facebook-login">Connect With Facebook</button>
                <button className="google-login">Connect With Google</button>
                <div className="login-or center">
                    <span>or</span>
                    <div className="or-divider"></div>
                </div>
                {lowerPartOfForm}
                <div className="divider"></div>
                <div>Already have an account? <span className="pointer" onClick={()=>{dispatch(openModal('open',<Login />))}}>Log in</span></div>
            </form>
        </div>

    )
}

export default SignUp;

