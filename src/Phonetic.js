import React from "react";

export default function Phonetic(props){
    return(
        <div className="Phonetic">
            <a href={props.phonetic.audio}><i class="fas fa-volume-up"></i></a>
            {props.phonetic.text}
        </div>

       
    )

}