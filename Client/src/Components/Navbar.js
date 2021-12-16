import './Navbar.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

export default function MenuBar() {
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location.state);

    const goSearch = () => {
        navigate('/search', {state: location.state})
    }

    const goRegisterProperty = () => {
        navigate('/register-property', {state: location.state})
    }

    const goProfile = () => {
        navigate('/profile', {state: location.state})
    }

    const goLogout = () => {
        navigate('/')
    }

    return (
        <nav className="Navbar">
            <h1>UniRent</h1>
            <div className="links">
                <span style={{color: "white", cursor: "pointer"}} onClick={goSearch}>Search&nbsp;&nbsp;&nbsp;</span>
                <span style={{color: "white", cursor: "pointer"}} onClick={goRegisterProperty}>Register Propert&nbsp;&nbsp;&nbsp;</span>
                <span style={{color: "white", cursor: "pointer"}} onClick={goProfile}>Profile&nbsp;&nbsp;&nbsp;</span>
                <span style={{color: "white", cursor: "pointer"}} onClick={goLogout}>Logout&nbsp;&nbsp;&nbsp;</span>
            </div>
        </nav>
    );
}