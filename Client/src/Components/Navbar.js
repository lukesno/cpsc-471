import './Navbar.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

export default function MenuBar() {
    return (
        <nav className="Navbar">
            <h1>UniRent</h1>
            <div className="links">
                <Link to="/search">Search&nbsp;&nbsp;&nbsp;</Link>
                <Link to="/register-property">Register Property&nbsp;&nbsp;&nbsp;</Link>
                <Link to="/profile">Profile&nbsp;&nbsp;&nbsp;</Link>
                <Link to="/">Logout</Link>
            </div>
        </nav>
    );
}