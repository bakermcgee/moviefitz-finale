import React from "react";
import './Landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

export default function Landing(){

    return(

        <div className="center-txt">
            <header className='bigger-txt'>
                MovieFitz
            </header>
            <p className="big-txt">
                Take your movie-going experience to the next level with MovieFitz!
            </p>
            <br></br><br></br>
                <div className="txt-box">
                    <FontAwesomeIcon icon={ faCalendarAlt } size='5x'/>
                    <br></br><br></br>
                        Stay up-to-date on all the latest movie showings near you.
                </div>
            <br></br>

            <div className="txt-box">
                <FontAwesomeIcon icon={ faThumbsUp } size='5x'/>
                <br></br><br></br>
                Get recommendations based on the types of movies you like and enjoy.
            </div>

            <br></br>

            <div className="txt-box">
                <FontAwesomeIcon icon={ faSlidersH } size='5x'/>
                <br></br><br></br>
                Configure based on your preferences to ensure a smooth movie-going experience.
            </div>

        </div>

    );

}