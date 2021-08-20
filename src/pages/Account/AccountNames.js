import React from 'react';

const AccountNames = (props)=>{

    return(
        <div className="sign-up-wrapper">
            <div className="col m12">
                <div className="input-field">
                    <div className="form-label">First Name</div>
                    <input type="text" placeholder="John" onChange={props.setFName} />
                </div>
            </div>
            <div className="col m12">
                <div className="input-field">
                    <div className="form-label">Last Name</div>
                    <input type="text" placeholder="Doe" onChange={props.setLName} />
                </div>
            </div>
            <div className="col m12">
                <button type="submit" className="right waves-effect waves-light btn-small">Submit</button>
            </div>
        </div>
    )
}

export default AccountNames;