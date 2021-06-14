import React from "react";

export default function Synonyms(props){

    if (props.sys){
        return(
            <div className="Synonyms">
                <strong>Synonyms:</strong>
                {props.sys.map(function(sys,index){
                    return(
                        <li className={index}>
                            {sys}
                        </li>
                    )
                })}

            </div>
        )
    }else{
        return null;
    }
}