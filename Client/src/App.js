import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Test from './Test.js';
import Login from './Pages/Login';
import Profile from  './Pages/Profile';
import Navbar from './Components/Navbar';
import Search from './Pages/Search';
import UserRegistration from './Pages/UserRegistration';
import PropertyView from './Pages/PropertyView';
import PropertyRegistration from './Pages/PropertyRegistration';

function App() {

  return (
    <BrowserRouter>
      <div className="App">    
          <Routes>
            <Route exact path="/" element={<div><Login/></div>}/>
            <Route exact path="/search" element={<div><Navbar/><Search/></div>}/>
            <Route exact path="/profile" element={<div><Navbar/><Profile/></div>}/>
            <Route exact path="/register" element={<div><UserRegistration/></div>}/>
            <Route exact path="/search/property" element={<div><Navbar/><PropertyView /></div>}/>
            <Route exact path="/register-property" element={<div><Navbar/><PropertyRegistration/></div>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
