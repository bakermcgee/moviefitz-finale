import {getDatabase, ref, set} from "firebase/database";
import './AdminUpdate.css'
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSync} from "@fortawesome/free-solid-svg-icons";


function UpdateMovieDB(){
    //fetches for each page of the latest movies
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key='+ process.env.REACT_APP_MOVIE_API_KEY +'&language=en-US&region=US')
        .then((page1) => {
                return page1.json();
        })
        .then((p1) => {
            fetch('https://api.themoviedb.org/3/movie/now_playing?api_key='+ process.env.REACT_APP_MOVIE_API_KEY +'&language=en-US&region=US&page=2')
                .then((page2) => {
                    return page2.json();
                })
                .then((p2) => {
                    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key='+ process.env.REACT_APP_MOVIE_API_KEY +'&language=en-US&region=US&page=3')
                        .then((page3) => {
                            return page3.json();
                        })
                        .then((p3) => {
                            const finalObj = [
                                ...p1.results,
                                ...p2.results,
                                ...p3.results
                            ];
                            return finalObj;
                        })
                        .then((nowPlaying) => {
                            //writes everythin to the db
                            const db = getDatabase();
                            const rf = ref(db, 'movies/');
                            set(rf, {nowPlaying});
                        })
                })
        })

}

export default function AdminUpdate(){

    return(
        <div>
            <Navbar/>
            <div>
                <div>
                    <br></br><br></br>
                    <header className='upd-txt'>
                        Update the database to store the latest films playing in theaters
                    </header>
                    <br></br><br></br>
                    <div className='upd-button'>
                        <button style={{position: "relative", cursor: "pointer"}} onClick={UpdateMovieDB}>
                            <FontAwesomeIcon icon={ faSync } />
                            <span> Update DB</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

}