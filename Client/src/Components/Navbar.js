import './Navbar.css';

export default function MenuBar() {
    return (
        <nav className="Navbar">
            <h1>UniRent</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/login">Search</a>
                <a href="/">Profile</a>
                <a href="/login">Logout</a>
            </div>
        </nav>
    );
}