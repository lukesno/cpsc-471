import './PropertyRegistration.css';
import { useState } from 'react';

export default function PropertyRegistration() {

    const [address, setAddress] = useState('');
    const [type, setType] = useState('');
    const [bed, setBed] = useState('');
    const [bath, setBath] = useState('');
    const [rent, setRent] = useState('');
    const [furnishing, setFurnishing] = useState('');
    const [sqFeet, setSqFeet] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
    }

    const registerClicked = () => {
        console.log("Register button clicked");
        const x = { address, type, bed, bath, rent, furnishing, sqFeet };
        console.log(x);
    }

    return (
        <div className="wrapper">
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
                        <p>Furnishing</p>
                        <select name="type" value={type} onChange={(e) => setFurnishing(e.target.value)}>
                            <option value="">--Please choose an option--</option>
                            <option value="furnished">Furnished</option>
                            <option value="unfurnished">Unfurnished</option>
                        </select>
                    </label>

                </fieldset>
                <button onClick={registerClicked} type="submit">Submit</button>
            </form>
        </div>
    )
}
