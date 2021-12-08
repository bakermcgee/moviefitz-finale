import React from "react";
import './Recommended.css';
import Navbar from "./Navbar";

const movies = ["Iron Man","Star Wars", "Legend of Hei", "Dragon Ball Super: Superhero", "Ghostbusters Afterlife", "House of Gucci", "The Incredibles", "Logan","Sonic The Hedgehog", "2012"];

export default function Recommended(){

    const moveList = movies.map((item, i) => (<p key={i} className='cards'>{item}</p>));

    return(

        <div>
            <Navbar />
            <br></br><br></br>
            <div >
                <header className='h-txt'>10 Movies Chosen For You</header>
                <br></br>
                <div className='movie-lane'>
                    {moveList}
                </div>
            </div>
        </div>

    );

}