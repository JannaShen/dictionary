import React, {useState} from "react";
import Photos from "./photo";
import axios from "axios";
import Result from "./result";
import "./Dictionary.css"

export default function Dictionary(){
    let [keyword, setKeyword]=useState("");
    let [result, setResult]=useState(null);
    let [photos, setPhotos]=useState(null);
    function search(event){
        event.preventDefault();
       
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
        let pexelsApiKey="563492ad6f917000010000013f4eee3b83e74175ae1db556b524db9e";
        let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
        let headers={Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {
            headers:headers}).then(handlePexelsResponse);

    }

    function handlePexelsResponse(response){
       
        setPhotos(response.data.photos);
    }
    function handleResponse(response){
        
        setResult(response.data[0])

    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    return(
        <div className="Dictionary">
            <p className="title">Dictionary</p>
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
            </form>
            <Result results={result}/>
            <Photos photos={photos}/>
        </div>
    )

}

