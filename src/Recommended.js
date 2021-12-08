import React from "react";
import './Recommended.css';
import Navbar from "./Navbar";
//import firebase from "firebase/compat";

const movies = ["No Time To Die","Venom: Let There Be Carnage", "The Green Knight", "Clifford The Big Red Dog", "Ghostbusters: Afterlife", "House of Gucci", "Free Guy", "Nobody","The Power of the Dog", "Eternals"];

/*function FetchMovies(){

    firebase.database().ref('').once('value', function (snapshot){

    });

}*/

export default function Recommended(){

    const moveList = movies.map((item, i) => (<p key={i} className='cards'>{item}</p>));

    return(

        <div>
            <Navbar />
            <br></br><br></br>
            <div >
                <header className='h-txt'>Movies Chosen For You</header>
                <br></br>
                <div className='movie-lane'>
                    {moveList}
                </div>
            </div>
        </div>

    );

}