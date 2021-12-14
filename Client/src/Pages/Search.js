import './Search.css';

export default function Search() {
    return (

        <div class = "searchForm">
            <div class = "searchFormGroup">
                <label> University: </label> 
                <select>
                    <option selected value="University of Calgary">University of Calgary</option>
                    <option value="Mount Royal University">Mount Royal University</option>
                    <option value="SAIT">SAIT</option>
                    <option value="Bow Valley College">Bow Valley College</option>
                </select>
            </div>
            <div class = "searchFormGroup">
                <label>Max Distance (km)</label>
                <input>
                </input>
            </div>
            <div class = "searchFormGroup">
                <button> Search </button>
            </div>            
        </div>
    )
}