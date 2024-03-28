import React, {useState} from "react";

const MadResults = ({words, story}) => {
    for (const key in words){
        if(Object.prototype.hasOwnProperty.call(words, key)){
            const value = words[key];
            const regex = new RegExp(`\\b${key}\\b`, 'gi')
            story = story.replace(regex, value)            
        }

    }
    return <div>
        {story}
    </div>
}

export default MadResults;