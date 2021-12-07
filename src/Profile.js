import React, { useState } from "react";
import './Profile.css';
import Navbar from "./Navbar";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile(){

    const [genres, setGenres] = useState(Array(6).fill(false));
    const [max, setMax] = useState(false);
    const [action, setAction] = useState(false);
    const [comedy, setComedy] = useState(false);
    const [horror, setHorror] = useState(false);
    const [indie, setIndie] = useState(false);
    const [mystery, setMystery] = useState(false);
    const [romance, setRomance] = useState(false);

    const addGenre = (i) => {
        const tempGenres = genres.slice();
        tempGenres[i] = !tempGenres[i];
        setGenres(tempGenres);
    }

    const changeAction = () => {
        if(!max || (max && action)) {
            setAction(!action);
            setMax(!max);
            addGenre(0);
        }
    }

    const changeComedy = () => {
        if(!max || (max && comedy)) {
            setComedy(!comedy);
            setMax(!max);
            addGenre(1);
        }
    }

    const changeHorror = () => {
        if(!max || (max && horror)) {
            setHorror(!horror);
            setMax(!max);
            addGenre(2);
        }
    }

    const changeIndie = () => {
        if(!max || (max && indie)) {
            setIndie(!indie);
            setMax(!max);
            addGenre(3);
        }
    }

    const changeMystery = () => {
        if(!max || (max && mystery)) {
            setMystery(!mystery);
            setMax(!max);
            addGenre(4);
        }
    }

    const changeRomance = () => {
        if(!max || (max && romance)) {
            setRomance(!romance);
            setMax(!max);
            addGenre(5);
        }
    }

    const Checkbox = ({ label, value, onChange }) => {
        return (
            <label className= 'container'>
                <input type="checkbox" checked={value} onChange={onChange} />
                <span className='checkmark'></span>
                {label}
            </label>
        );
    };

    return(

        <div>
            <Navbar />
            <br></br><br></br>
            <div className='box'>
                <div className='txt'>
                    <FontAwesomeIcon icon={ faFilm } size='5x' color='#f32148'/>
                    <br></br>
                    <h1>Select your favorite genre below!</h1>
                    <br></br>
                </div>
                <div className='button-list'>
                    <Checkbox
                        label = 'Action'
                        value = {action}
                        onChange={changeAction}
                    />
                    <br></br>
                    <Checkbox
                        label = 'Comedy'
                        value = {comedy}
                        onChange={changeComedy}
                    />
                    <br></br>
                    <Checkbox
                        label = 'Horror'
                        value = {horror}
                        onChange={changeHorror}
                    />
                    <br></br>
                    <Checkbox
                        label = 'Indie'
                        value = {indie}
                        onChange={changeIndie}
                    />
                    <br></br>
                    <Checkbox
                        label = 'Mystery'
                        value = {mystery}
                        onChange={changeMystery}
                    />
                    <br></br>
                    <Checkbox
                        label = 'Romance'
                        value = {romance}
                        onChange={changeRomance}
                    />
                </div>
            </div>
        </div>

    );

}