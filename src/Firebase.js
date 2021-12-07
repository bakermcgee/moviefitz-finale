import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const fbConfig = {

        apiKey: "AIzaSyCQdDHNAI71ITTRUVc0s-3fpbcTKdvPPdY",
        authDomain: "moviefitz-14228.firebaseapp.com",
        databaseURL: "https://moviefitz-14228-default-rtdb.firebaseio.com",
        projectId: "moviefitz-14228",
        storageBucket: "moviefitz-14228.appspot.com",
        messagingSenderId: "387011886207",
        appId: "1:387011886207:web:5ea7780c00a44a2ece134a",
        measurementId: "G-763M06W6B9"

}

const app = initializeApp(fbConfig);
export const auth = getAuth(app);



