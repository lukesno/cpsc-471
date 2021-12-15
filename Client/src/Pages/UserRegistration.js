import './PropertyRegistration.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

export default function UserRegistration() {

    const [type, setType] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    const handleSubmit = event => {
        event.preventDefault();
    }

    const registerClicked = () => {
        console.log("Register button clicked");
        const x = { type, username, password, name };
        console.log(x);
    }

    return (
        <div className="wrapper">
            <h2>Register a user:</h2>

            <form onSubmit={handleSubmit}>

                <fieldset>

                    <label>
                        <p>Type</p>
                        <select name="type" value={type} onChange={(e)=>setType(e.target.value)}>
                            <option value="">--Please choose an option--</option>
                            <option value="student">Student</option>
                            <option value="landlord">Landlord</option>
                        </select>
                    </label>

                    <label>
                        <p>Name</p>
                        <input name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </label>

                    <label>
                        <p>Username</p>
                        <input name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    </label>

                    <label>
                        <p>Password</p>
                        <input name="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </label>

                </fieldset>
                <Link to="/">
                    <button onClick={registerClicked} type="submit">Submit</button>
                </Link>
            </form>
        </div>
    )
}
