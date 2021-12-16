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
                    {/* Improvement for future: create a table in db full of all universities for scalability */}
                    <option selected value="2500 University Dr NW, Calgary, AB, Canada">University of Calgary</option>
                    <option value="4825 Mt Royal Gate SW, Calgary, AB, Canada">Mount Royal University</option>
                    <option value="1301 16 Ave NW, Calgary, AB, Canada">SAIT</option>
                    <option value="345 6 Ave SE, Calgary, AB, Canada">Bow Valley College</option>
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