import {child, get, getDatabase, ref} from "firebase/database";
import Navbar from "./Navbar";
import React, {useEffect, useState} from "react";
import './MovieStyle.css';
import { auth } from './Firebase';
import {useNavigate} from "react-router-dom";

export default function Recommended(){

    const db = getDatabase();
    const nav = useNavigate();
    const movieList = [];
    const [titles, setTitles] = useState([]);
    const [desc, setDesc] = useState([]);
    const [post, setPost] = useState([]);
    const [genres, setGenres] = useState([]);
    const [match, setMatch] = useState([]);
    const [userGenres, setUserGenres] = useState([]);

    function GetMoviess() {
        auth.onAuthStateChanged((user) => { //checks if the user is authenticated
            if (user != null) {                              //if so, move on

                get(child(ref(db), 'movies/nowPlaying/')).then((snapshott) => { //retrieves movies again
                    if (snapshott.exists()) {
                        snapshott.forEach((childSnap) => {
                            const t = childSnap.child('title').val();
                            const d = childSnap.child('overview').val();
                            const p = ('https://image.tmdb.org/t/p/original' + childSnap.child('poster_path').val());
                            const g = childSnap.child('genre_ids').val();
                            movieList.push({title: t, description: d, poster: p, genress: g})
                        })

                        setTitles(movieList.map(({title}) => title));
                        setDesc(movieList.map(({description}) => description));
                        setPost(movieList.map(({poster}) => poster));
                        setGenres(movieList.map(({genress}) => genress));

                    } else {
                        console.log('Database Error: Missing movies list');
                    }
                });
                const uID = user.uid;

                get(child(ref(db), 'users/' + uID + '/genres')) //retrieves user's genres
                    .then((snap) => {
                        if (snap.exists()) {

                            setUserGenres(snap.child('genre_ids').val());
                        }
                    })

            }else{
                console.log('Session Expired');
                nav('/');
            }
        });
    }

    useEffect(() => GetMoviess(), [])
    useEffect(() => {
        ReccMovies(titles, desc, post, genres, userGenres);

    }, [userGenres])

    function ReccMovies(t, d, p, ge) {

        const tmp = [];

        userGenres.forEach((genre) => { //for each user genre
            ge.forEach((genr) => { //for each movies' genres
                if(genr != null){
                    genr.forEach((gen) => { //for each movie's genres
                        if (gen === genre) { //if the movie's genre matches the user genre, it's added to the list
                            tmp.push(t[ge.indexOf(genr)]);
                        }
                    })
                }
            })
        })

        let counts = {};

        for (let i = 0; i < tmp.length; i++) { //counts the number of times a genre match appears for a particular film
            if (counts[tmp[i]]) {
                counts[tmp[i]] += 1;
            } else {
                counts[tmp[i]] = 1;
            }
        }

        let sorted = [];

        for (let m in counts) { //sorts the list of movies based on hightest number of matches
            sorted.push([m, counts[m]]);
        }

        sorted = sorted.sort(function (a, b) {
            return b[1] - a[1];
        });

        const t_titles = [];
        const t_desc = [];
        const t_post = [];
        const t_genres = [];
        const t_match = [];

        for(let x = 0; x < sorted.length; x++){ //updates temporary arrays with matches

            if(t.includes(sorted[x][0])){

                t_titles.push(t[t.indexOf(sorted[x][0])]);
                t_genres.push(ge[t.indexOf(sorted[x][0])]);
                t_desc.push(d[t.indexOf(sorted[x][0])]);
                t_post.push(p[t.indexOf(sorted[x][0])]);
                t_match.push(sorted[x][1]);

            }

        }

        //updates all lists
        setTitles(t_titles);
        setGenres(t_genres);
        setDesc(t_desc);
        setPost(t_post);
        setMatch(t_match);


    }

    //maps for render
    const items = titles.map((t, i) =>

        (

            <li key={i} className='movie-card' style={{display:'inline'}} onClick={() => alert(desc[i] + '\n\nMatch: ' + (100 * (match[i]/5)) + '%')}>
                <img src={post[i]} className='card-img' width = '160' height= '240'></img>
                <div className='m-txt'>{t}</div>
            </li>

        )
    );




    return(

        <div>
            <Navbar />
            <br></br>
            <div>
                <header className='h-txt'>Recommended Just For You</header>
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
