import './Login.css';

export default function Login() {
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
                    <button class="btn" type="submit">Submit</button>
                    <div>
                        <h3>New user?</h3>
                        <a href="/login">click here to sign up</a>
                    </div>
                </form>
            </div>
        </body>
    )
}