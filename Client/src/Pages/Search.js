import { useState } from "react";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './Search.css';

export default function Search() {

    const [university, setUniversity] = useState('University of Calgary');
    const [distance, setDistance] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const searchClicked = () => {
        console.log("Search button clicked");
        const search = {university, distance};
        console.log(search);
    }

    return (
        <form onSubmit = {handleSubmit}>
            <div class = "searchFormGroup">
                <label>University: </label> 
                <select
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                >
                    <option selected value="University of Calgary">University of Calgary</option>
                    <option value="Mount Royal University">Mount Royal University</option>
                    <option value="SAIT">SAIT</option>
                    <option value="Bow Valley College">Bow Valley College</option>
                </select>
            </div>
            <div class = "searchFormGroup">
                <label>Max Distance (km)</label>
                <input
                    type = "text"
                    required
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}                
                >
                </input>
            </div>
            <div class = "searchFormGroup">
                <Link to="/search-results">
                    <button onClick = {searchClicked}> Search </button>
                </Link>
            </div>            
        </form>
    )
}