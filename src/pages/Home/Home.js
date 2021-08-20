// import React, { useState, useEffect } from 'react';
import React from 'react';
import './Home.css';
// import SearchBox from './SearchBox';
// import Spinner from '../../utility/Spinner/Spinner';
// import axios from 'axios';
// import Cities from '../../utility/City/Cities';
// import Activities from '../../utility/Activity/Activities';
// import Venues from '../../utility/Venue/Venues';
import penguin from '../../images/penguin.png'

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
    // <div>
        /* <div className="container-fluid">
            <div className="row">
                <div className="home col s12">
                    <div className="upper-fold">
                        <SearchBox history={props.history} />
                    </div>
                </div>
            </div> */
        /* </div> */
        /* <div className="container-fluid lower-fold">
            <div className="row">
                <div className="col s12">
                    <Cities cities={cities} header="Recommended Cities For You" />
                </div>

                <div className="col s12">
                    <Activities activities={activities} header="Today in your area" />
                </div>
    
                <div className="col s12">
                    <Cities cities={europeCities.cities} header={europeCities.header} />
                </div>

                <div className="col s12">
                    <Venues venues={recVenues.venues} header={recVenues.header} />
                </div>
                

                <div className="col s12">
                    <Cities cities={asiaCities.cities} header={asiaCities.header} />
                </div>

                <div className="col s12">
                    <Cities cities={exoticCities.cities} header={exoticCities.header} />
                </div>

            </div>
        </div>
    </div> */
    )

}

export default Home;
