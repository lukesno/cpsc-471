import './Navbar.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

export default function MenuBar() {
    return (
        <nav className="Navbar">
            <h1>UniRent</h1>
            <div className="links">
                <Link to="/search">Search</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/">Logout</Link>
            </div>
        </nav>
    );
}