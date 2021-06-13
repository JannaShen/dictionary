import React, {useState} from "react";
import axios from "axios";

export default function Dictionary(){
    let [keyword, setKeyword]=useState("");
    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_us/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

    }

    function handleResponse(){

    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    return(
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
        </div>
    )

}

