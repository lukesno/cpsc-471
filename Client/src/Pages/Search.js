import { useState } from "react";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import SearchResult from '../Components/SearchResult';
import './Search.css';
import { useLocation } from 'react-router-dom'; 

export default function Search() {

    const [university, setUniversity] = useState('University of Calgary');
    const [distance, setDistance] = useState('');
    const [propertyFound, setPropertyFound] = useState([]);

    const location = useLocation();
    console.log(location.state)

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const searchClicked = () => {
        console.log("Search button clicked");
        console.log(university)
        fetch(`http://localhost:8081/retrieve/${university}/${distance}`, {method: "GET"})
        .then(response => {
            return response.json()
        })
        .then(res => {
            console.log(res)
            setPropertyFound(res.properties)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{width: "100%"}}>
                <div class="formContainer">
                    <div class="universitySelect">
                        <label>University: </label> 
                        <select
                            value={university}
                            onChange={(e) => setUniversity(e.target.value)}
                        >  
                            {/* Improvement for future: create a table in db full of all universities for scalability */}
                            <option selected value="2500+University+Dr+NW,+Calgary,+AB,+Canada">University of Calgary</option>
                            <option value="4825+Mt+Royal+Gate+SW,+Calgary,+AB,+Canada">Mount Royal University</option>
                            <option value="1301+16+Ave+NW,+Calgary,+AB,+Canada">SAIT</option>
                            <option value="345+6+Ave+SE,+Calgary,+AB,+Canada">Bow Valley College</option>
                        </select>
                    </div>
                    <div class="distanceSelect">
                        <label>Max Distance (km)</label>
                        <input
                            type = "text"
                            required
                            value={distance}
                            onChange={(e) => setDistance(e.target.value)}                
                        >
                        </input>
                    </div>
                    <div class="searchButton">
                        <button onClick = {searchClicked}> Search </button>
                    </div>     
                </div>
            </form>
            <div class="resultContainer">
                {propertyFound.map((searchResult) => {
                    return (<SearchResult key={searchResult.propertyID} searchResult={searchResult}/>)
                })}
            </div>
        </div>
    )
}