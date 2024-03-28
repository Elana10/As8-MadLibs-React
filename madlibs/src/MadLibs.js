import React, {useState} from "react";
import Input from "./Input"
import WordForm from "./WordForm";
import MadResults from "./MadResults";

function MadLibs(){
    const STORY = "There was a COLOR NOUN who loved a ADJECTIVE NOUN2."
    const [submitted, setSubmit] = useState(false);
    const [words, setWords] = useState([])

    return (
        <div>
            <h2>MADLIBS!</h2>
            {!submitted ? (<WordForm setSubmit={setSubmit} setWords = {setWords}/>) : (<MadResults words = {words} story = {STORY} />) } 
        </div>
    )


}

export default MadLibs;