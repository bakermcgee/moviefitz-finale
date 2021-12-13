import {child, get, getDatabase, ref} from "firebase/database";
import Navbar from "./Navbar";
import React, {useEffect, useState} from "react";
import './MovieStyle.css';

export default function NowPlaying(){

    const db = getDatabase();
    const movieList = [];
    const [titles, setTitles] = useState([]);
    const [desc, setDesc] = useState([]);
    const [post, setPost] = useState([]);
    const [first, setFirst] = useState(false);

    function GetMovies() {
        //retrieves movies from the db
        get(child(ref(db), 'movies/nowPlaying/')).then((snapshot) => {
            if (snapshot.exists() && !first) {
                snapshot.forEach((childSnap) => {
                    const t = childSnap.child('title').val();
                    const d = childSnap.child('overview').val();
                    const p = ('https://image.tmdb.org/t/p/original' + childSnap.child('poster_path').val());

                    movieList.push({title: t, description: d, poster: p})
                })

                setTitles(movieList.map(({title}) => title));
                setDesc(movieList.map(({description}) => description));
                setPost(movieList.map(({poster}) => poster));
                setFirst(true);
            } else {
                console.log('Database Error: Missing movies list');
            }
        });
    }

    useEffect(() => GetMovies(), []) //gets movies on render

    //maps the movies to be rendered
    const items = titles.map((t, i) =>
        (

            <li key={i} className='movie-card' style={{display:'inline'}} onClick={() => alert(desc[i])}>
                <img src={post[i]} className='card-img' width = '160' height= '240'></img>
                <div className='m-txt'>{t}</div>
            </li>

        ));



    return(

        <div>
            <Navbar />
            <br></br>
            <div>
                <header className='h-txt'>Now Playing</header>
                <br></br>
                <div className='movie-back'>
                    <div className='movie-lane'>
                    {items}
                    </div>
                </div>

            </div>
        </div>

    );

}