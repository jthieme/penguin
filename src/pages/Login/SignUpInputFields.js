import React from 'react';

const SignUpInputFields = (props)=>{
    return(
        <div className="sign-up-wrapper">
            <div className="col m12">
                <div className="input-field" id="username">
                    <div className="form-label">Username</div>
                    <input type="text" placeholder="Username" onChange={props.changeUsername} />
                </div>
            </div>
            <div className="col m12">
                <div className="input-field" id="email">
                    <div className="form-label">Email</div>
                    <input type="text" placeholder="Email" onChange={props.changeEmail} />
                </div>
            </div>
            <div className="col m12">
                <div className="input-field" id="password">
                    <div className="form-label">Password</div>
                    <input type="password" placeholder="Password" onChange={props.changePassword} />
                </div>
            </div>
            <div className="col m12">
                <button type="submit" className="col m12 btn red accent-2">Sign Up!</button>
            </div>
        </div>
    )
}

export default SignUpInputFields;