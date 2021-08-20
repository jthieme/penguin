import React, { Component, useRef, useState } from 'react';
import './Account.css';
import { Link } from 'react-router-dom'

function AccountSideBar(props){

    const noImage = "https://airbnb-clone-prexel-images.s3.amazonaws.com/genericAvatar.png";

    const [ userImage, setUserImage ] = useState(noImage);
    const inputFile = useRef(noImage)

    const changeImage = (e) => {
        inputFile.current.click()
        if (e.target.files && e.target.files[0]) {
            setUserImage(URL.createObjectURL(e.target.files[0]));
        }
    }

    const chooseImage = (e) => {
        const file = inputFile.current.click()
        changeImage(file)
        
    }

    return(
        <ul className="sidenav sidenav-fixed">
            <li>
                <div className="user-view valign-wrapper center-align">
                    <img className="user-image" src={userImage ? userImage : noImage} onChange={changeImage} />
                </div>
                <div className="edit-btn center">
                    <button onClick={changeImage} className="waves-effect waves-light btn-small">Edit<input className="user-image" type="file" ref={inputFile} onChange={changeImage} style={{display: 'none'}} /></button>
                    
                </div>
            </li>
            <li>
                <Link to="/account">Account</Link>
            </li>
            <li>
                <Link to="/account/placeholder/ph">Placeholder</Link>
            </li>
            <li>
                <Link to="/account/placeholder/p">Placeholder</Link>
            </li>
            <li>
                <Link to="/account/change-pass">Change Password</Link>
            </li>
        </ul>
    )
}

export default AccountSideBar;