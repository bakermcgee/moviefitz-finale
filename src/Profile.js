import React, {useEffect, useState} from "react";
import './Profile.css';
import Navbar from "./Navbar";
import {faFilm, faRedo, faUpload} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {child, getDatabase, ref, set, get} from "firebase/database";
import { auth } from './Firebase';
import { useNavigate } from "react-router-dom";

export default function Profile(){

    const db = getDatabase();
    const nav = useNavigate();

    const [userId, setUserID] = useState(null);
    const [max, setMax] = useState(false);
    const [count, setCount] = useState(0);
    const [action, setAction] = useState(false);
    const [animation, setAnimation] = useState(false);
    const [comedy, setComedy] = useState(false);
    const [drama, setDrama] = useState(false);
    const [family, setFamily] = useState(false);
    const [fantasy, setFantasy] = useState(false);
    const [horror, setHorror] = useState(false);
    const [musical, setMusical] = useState(false);
    const [sciFi, setSciFi] = useState(false);
    const [thriller, setThriller] = useState(false);
    const [mystery, setMystery] = useState(false);
    const [romance, setRomance] = useState(false);
    const [userGenres, setUserGenres] = useState([]);

    function WriteGenreData(){ //writes liked genres to db if user submits
        set(ref(db, 'users/' + userId + '/genres'), {
            genre_ids: userGenres
        });
    }

    function ClearGenreData(){ //clears liked genres if user resets
        set(ref(db, 'users/' + userId + '/genres'), {
            genre_ids: null
        });
        setUserGenres([]);
        setAction(false);
        setAnimation(false);
        setComedy(false);
        setDrama(false);
        setFamily(false);
        setFantasy(false);
        setHorror(false);
        setMusical(false);
        setMystery(false);
        setRomance(false);
        setSciFi(false);
        setThriller(false);
        setCount(0);
        setMax(false);
    }

    function GetProfileInfo(){ //gets previous liked genres if chosen

        auth.onAuthStateChanged((user) => {
            if(user != null){
                setUserID(user.uid);
                get(child(ref(db), 'users/' + userId + '/genres'))
                    .then((snapshot) => {
                        if (snapshot.exists()) {
                            setUserGenres(snapshot.child('genre_ids').val());
                            setCount(userGenres.length);
                        }
                    });

                if (count > 0) {
                    userGenres.forEach((i) => {
                        switch (i) {
                            case 28:
                                setAction(true);
                                break;
                            case 16:
                                setAnimation(true);
                                break;
                            case 35:
                                setComedy(true);
                                break;
                            case 18:
                                setDrama(true);
                                break;
                            case 10751:
                                setFamily(true);
                                break;
                            case 14:
                                setFantasy(true);
                                break;
                            case 27:
                                setHorror(true);
                                break;
                            case 10402:
                                setMusical(true);
                                break;
                            case 9648:
                                setMystery(true);
                                break;
                            case 10749:
                                setRomance(true);
                                break;
                            case 878:
                                setSciFi(true);
                                break;
                            case 53:
                                setThriller(true);
                                break;
                        }
                    })
                }

                if (count === 5) {
                    setMax(true);
                }

            }else{
                console.log('Session Expired');
                nav('/');
            }
        });

    }

    GetProfileInfo();

    const changeAction = () => {
        if(!max || (max && action)) {
            const temp = userGenres;
            if(count < 5 && !action){//if the user enables this genre
                temp.push(28);
                setCount(count + 1);
            }else if(action){//if the user disables this genre
                temp.splice(temp.indexOf(28), 28);
                setCount(count - 1);
                setMax(false);
            }

            setAction(!action);

            if(count === 5 && !max){//sets max to true if user enabled genre and count reached 5
                setMax(true);
            }

            setUserGenres(temp); //updates the user's genres

        }
    }
    //rest are in same format as changeAction
    const changeAnimation = () => {
        if(!max || (max && animation)) {
            const temp = userGenres;
            if(count < 5 && !animation){
                temp.push(16);
                setCount(count + 1);
            }else if(animation){
                temp.splice(temp.indexOf(16), 16);
                setCount(count - 1);
                setMax(false);
            }

            setAnimation(!animation);
            if(count === 5 && !max){
                setMax(true);
            }

            setUserGenres(temp);

        }
    }

    const changeComedy = () => {
        if(!max || (max && comedy)) {
            const temp = userGenres;
            if(count < 5 && !comedy){
                temp.push(35);
                setCount(count + 1);
            }else if(comedy){
                temp.splice(temp.indexOf(35), 35);
                setCount(count - 1);
                setMax(false);
            }

            setComedy(!comedy);
            if(count === 5 && !max){
                setMax(true);
            }

            setUserGenres(temp);

        }
    }

    const changeDrama = () => {
        if(!max || (max && drama)) {
            const temp = userGenres;
            if(count < 5 && !drama){
                temp.push(18);
                setCount(count + 1);
            }else if(drama){
                temp.splice(temp.indexOf(18), 18);
                setCount(count - 1);
                setMax(false);
            }

            setDrama(!drama);
            if(count === 5 && !max){
                setMax(true);
            }

            setUserGenres(temp);

        }
    }

    const changeFamily = () => {
        if(!max || (max && family)) {
            const temp = userGenres;
            if(count < 5 && !family){
                temp.push(10751);
                setCount(count + 1);
            }else if(family){
                temp.splice(temp.indexOf(10751), 10751);
                setCount(count - 1);
                setMax(false);
            }

            setFamily(!family);
            if(count === 5 && !max){
                setMax(true);
            }

            setUserGenres(temp);

        }
    }

    const changeFantasy = () => {
        if(!max || (max && fantasy)) {
            const temp = userGenres;

            if(count < 5 && !fantasy){
                temp.push(14);
                setCount(count + 1);
            }else if(fantasy){
                temp.splice(temp.indexOf(14), 14);
                setCount(count - 1);
                setMax(false);
            }

            setFantasy(!fantasy);
            if(count === 5 && !max){
                setMax(true);
            }

            setUserGenres(temp);

        }
    }

    const changeHorror = () => {
        if(!max || (max && horror)) {
            const temp = userGenres;

            if(count < 5 && !horror){
                temp.push(27);
                setCount(count + 1);
            }else if(horror){
                temp.splice(temp.indexOf(27), 27);
                setCount(count - 1);
                setMax(false);
            }

            setHorror(!horror);
            if(count === 5 && !max){
                setMax(true);
            }

            setUserGenres(temp);

        }
    }

    const changeMusical = () => {
        if(!max || (max && musical)) {
            const temp = userGenres;

            if(count < 5 && !musical){
                temp.push(10402);
                setCount(count + 1);
            }else if(musical){
                temp.splice(temp.indexOf(10402), 10402);
                setCount(count - 1);
                setMax(false);
            }

            setMusical(!musical);
            if(count === 5 && !max){
                setMax(true);
            }

            setUserGenres(temp);

        }
    }

    const changeMystery = () => {
        if(!max || (max && mystery)) {
            const temp = userGenres;

            if(count < 5 && !mystery){
                temp.push(9648);
                setCount(count + 1);
            }else if(mystery){
                temp.splice(temp.indexOf(9648), 9648);
                setCount(count - 1);
                setMax(false);
            }

            setMystery(!mystery);
            if(count === 5 && !max){
                setMax(true);
            }

            setUserGenres(temp);

        }
    }

    const changeRomance = () => {
        if(!max || (max && romance)) {
            const temp = userGenres;

            if(count < 5 && !romance){
                temp.push(10749);
                setCount(count + 1);
            }else if(romance){
                temp.splice(temp.indexOf(10749), 10749);
                setCount(count - 1);
                setMax(false);
            }

            setRomance(!romance);
            if(count === 5 && !max){
                setMax(true);
            }

            setUserGenres(temp);

        }
    }

    const changeSciFi = () => {
        if(!max || (max && sciFi)) {
            const temp = userGenres;

            if(count < 5 && !sciFi){
                temp.push(878);
                setCount(count + 1);
            }else if(sciFi){
                temp.splice(temp.indexOf(878), 878);
                setCount(count - 1);
                setMax(false);
            }

            setSciFi(!sciFi);
            if(count === 5 && !max){
                setMax(true);
            }

            setUserGenres(temp);

        }
    }

    const changeThriller = () => {
        if(!max || (max && thriller)) {
            const temp = userGenres;

            if(count < 5 && !thriller){
                temp.push(53);
                setCount(count + 1);
            }else if(thriller){
                temp.splice(temp.indexOf(53), 53);
                setCount(count - 1);
                setMax(false);
            }

            setThriller(!thriller);
            if(count === 5 && !max){
                setMax(true);
            }

            setUserGenres(temp);

        }
    }

    //checks for max genres
    if(count === 5 && !max){
        setMax(true);
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
                    <h1>Select up to 5 genres below!</h1>
                    <br></br>
                </div>
                <div className='button-list'>
                    <Checkbox
                        label = 'Action'
                        value = {action}
                        onChange={changeAction}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br></br>
                    <Checkbox
                        label = 'Animation'
                        value = {animation}
                        onChange={changeAnimation}
                    />
                    &nbsp;
                    <br></br>
                    <Checkbox
                        label = 'Comedy'
                        value = {comedy}
                        onChange={changeComedy}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br></br>
                    <Checkbox
                        label = 'Drama'
                        value = {drama}
                        onChange={changeDrama}
                    />
                    &nbsp;
                    <br></br>
                    <Checkbox
                        label = 'Family'
                        value = {family}
                        onChange={changeFamily}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br></br>
                    <Checkbox
                        label = 'Fantasy'
                        value = {fantasy}
                        onChange={changeFantasy}
                    />
                    <br></br>
                    &nbsp;
                    <Checkbox
                        label = 'Horror'
                        value = {horror}
                        onChange={changeHorror}
                    />
                    <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Checkbox
                        label = 'Musical'
                        value = {musical}
                        onChange={changeMusical}
                    />
                    &nbsp;
                    <br></br>
                    <Checkbox
                        label = 'Mystery'
                        value = {mystery}
                        onChange={changeMystery}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br></br>
                    <Checkbox
                        label = 'Romance'
                        value = {romance}
                        onChange={changeRomance}
                    />
                    &nbsp;
                    <br></br>
                    <Checkbox
                        label = 'SciFi'
                        value = {sciFi}
                        onChange={changeSciFi}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br></br>
                    <Checkbox
                        label = 'Thriller'
                        value = {thriller}
                        onChange={changeThriller}
                    />
                    &nbsp;

                </div>
                <br></br>
                <div className='wb-container'>
                    <button className='write-buttons' onClick={WriteGenreData}>
                        <FontAwesomeIcon icon={faUpload} />
                        <span> Submit</span>
                    </button>
                    &nbsp;
                    <br></br>
                    <button className='write-buttons' onClick={ClearGenreData}>
                        <FontAwesomeIcon icon={faRedo} />
                        <span> Reset</span>
                    </button>
                </div>
            </div>
        </div>

    );

}