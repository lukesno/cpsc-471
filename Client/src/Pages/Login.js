import './Login.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({})

    const loginCheck = () => {
        fetch(`http://localhost:8081/user/${email}/${password}`, {method: "GET"})
        .then(response => {return response.json()}) 
        .then(auth => {
            console.log(auth) 
            setUser(auth.data.user)
            if(auth.data.isAuthentic == true) {
                navigate('/search', {state: user})
            }
        })
    };

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (

        <body class="main">

            <div class="container">
                <h1 class="title">UniRent</h1>
                <form action="" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div class="form-group">
                        <h2>Email:</h2>
                        <input class="form-control" type="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div class="form-group">
                        <h2>Password:</h2>
                        <input class="form-control" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <button class="btn" type="submit" onClick={loginCheck}>Submit</button>
    
                    <div class = "register-text">
                        <Link to="/register">New User? Click Here.</Link>
                    </div>
                </form>
            </div>
        </body>
    )
}