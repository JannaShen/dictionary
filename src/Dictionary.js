import React, {useState} from "react";
import axios from "axios";
import Result from "./result";

export default function Dictionary(){
    let [keyword, setKeyword]=useState("");
    let [result, setResult]=useState(null);
    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

    }

    function handleResponse(response){
        console.log(response.data[0]);
        setResult(response.data[0])

    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    return(
        <div className="Dictionary">
            <p>Dictionary</p>
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
            <Result results={result}/>
        </div>
    )

}

