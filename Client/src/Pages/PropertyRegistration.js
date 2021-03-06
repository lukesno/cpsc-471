import { useState } from 'react';
import { useLocation } from 'react-router-dom'; 

export default function PropertyRegistration() {
    const location = useLocation();
    console.log(location.state)
    
    const [address, setAddress] = useState('');
    const [type, setType] = useState('');
    const [bed, setBed] = useState('');
    const [bath, setBath] = useState('');
    const [rent, setRent] = useState('');
    const [furnishing, setFurnishing] = useState('');
    const [sqFeet, setSqFeet] = useState('');


    const [landlordID, setLandlordID] = useState('')

    const register = () => {
        console.log("Register button clicked");

        navigate('/user/user_id', {state: searchResult})
        const x = { address, type, bed, bath, rent, furnishing, sqFeet, landlordID };
        console.log(x);
        fetch(`http://localhost:8081/user/${address}/${type}/${bed}/${bath}/${rent}/${furnishing}/${sqFeet}`, {method: "POST"})
    };

    const handleSubmit = event => {
        event.preventDefault();
    }

    const registerClicked = () => {
        console.log("Register button clicked");
        const x = { address, type, bed, bath, rent, furnishing, sqFeet };
        console.log(x);
    }

    return (
        <div className="propertyRegistration">
            <h2>Register a property:</h2>

            <form onSubmit={handleSubmit}>

                <fieldset>
                    <label>
                        <p>Address</p>
                        <input name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </label>

                    <label>
                        <p>Type</p>
                        <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="">--Please choose an option--</option>
                            <option value="house">House</option>
                            <option value="townhouse">Townhouse</option>
                            <option value="condo">Condo</option>
                        </select>
                    </label>

                    <label>
                        <p>Rent price</p>
                        <input type="number" name="rent" step='100' value={rent} onChange={(e) => setRent(e.target.value)} />
                    </label>

                    <label>
                        <p>Number of bedrooms</p>
                        <input type="number" name="bed" step='1' value={bed} onChange={(e) => setBed(e.target.value)} />
                    </label>

                    <label>
                        <p>Number of bathrooms</p>
                        <input type="number" name="bath" step='1' value={bath} onChange={(e) => setBath(e.target.value)} />
                    </label>

                    <label>
                        <p>Square feet</p>
                        <input type="number" name="sqFeet" step='100' value={sqFeet} onChange={(e) => setSqFeet(e.target.value)} />
                    </label>

                    <label>
                        <p>Furnished</p>
                        <select name="type" value={type} onChange={(e) => setFurnishing(e.target.value)}>
                            <option value="">--Please choose an option--</option>
                            <option value="furnished">Furnished</option>
                            <option value="unfurnished">Unfurnished</option>
                        </select>
                    </label>

                    <label>
                        <p>Insurance Information</p>
                        <input/>
                    </label>      

                    <label>
                        <p>Insurance Coverage Amount</p>
                        <input/>
                    </label>                                  

                </fieldset>
                <button onClick={registerClicked} type="submit">Submit</button>
            </form>
        </div>
    )
}
