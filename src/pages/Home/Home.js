
import React from 'react';
import './Home.css';


function Home(props){


    return(
        <div className="center home-opening">
            <h1>Welcome to Penguin</h1>
            <div className="content-container">

                
                <p className="content">With this platform, you can add yourself to a queue to ask your professor any and all questions you have!
                    <br/><br /> Feeling sick or unable to ask questions in person? No problem! That's what we're here for!<br />
                    <br />In the future, you'll be able to search your professor in order to add yourself to their queue.
                    <br />From there, your professor will meet with you as soon as they can. You will even get a 5 minute warning
                    when your next! <br />
                    <br />If your feeling sick or otherwise unable to see your teacher in person, just click the Zoom button when
                    you fill out your queue request. It will send them an invite link to your Zoom room so you can meet as easily as possible.
                </p>
            </div>
        </div>
    
    )

}

export default Home;