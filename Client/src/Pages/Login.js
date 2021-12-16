import './Login.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

export default function Login() {
    const loginCheck = () => {
        // fetch("http://localhost:8081/auth", {method: "GET"})
        // .then(response => {return response.json()})
        // .then(res => console.log(res.data[0].username))
        
    };


    return (

        <body class="main">

            <div class="container">
                <h1 class="title">UniRent</h1>
                <form action="">
                    <h1>Login</h1>
                    <div class="form-group">
                        <h2>Username:</h2>
                        <input class="form-control" type="username" />
                    </div>

                    <div class="form-group">
                        <h2>Password:</h2>
                        <input class="form-control" type="password" />
                    </div>
                    <Link to="/search">
                        <button class="btn" type="submit" onClick={loginCheck}>Submit</button>
                    </Link>
                    <div>
                        <h3>New user?</h3>
                        <Link to="/register">click here to sign up</Link>
                    </div>
                </form>
            </div>
        </body>
    )
}