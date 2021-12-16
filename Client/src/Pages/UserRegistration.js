import './UserRegistration.css';
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
            <h2>Register New User:</h2>
                <form onSubmit={handleSubmit}>
                    <p>User Type:</p>
                    <select name="type" value={type} onChange={(e)=>setType(e.target.value)}>
                        <option value="">--Please choose an option--</option>
                        <option value="student">Student</option>
                        <option value="landlord">Landlord</option>
                    </select>
                    <p>Full Name:</p>
                    <input name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                     <p>Email:</p>
                    <input name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <p>Password:</p>
                    <input name="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </form>
                <div className='buttonDiv'>
                    <Link to="/">
                        <button onClick={registerClicked} type="submit">Submit</button>
                    </Link>
                </div>                
        </div>
    )
}
