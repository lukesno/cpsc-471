import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Test from './Test.js';
import Login from './Pages/Login';
import Profile from  './Pages/Profile';
import Navbar from './Components/Navbar';
import Search from './Pages/Search';
import SearchResults from './Pages/SearchResults';
import UserRegistration from './Pages/UserRegistration';

function App() {

  // sample data to display search results

  const [searchResults, setTasks] = useState([
    {
        propertyID: 1,
        address: "123 Example Street",
        type: "Duplex",
        noBeds: 5,
        noBaths: 5,
        rentPrice: 3000,
        furnished: "Yes",
        squareFeet: 2800,
    },
    {
        propertyID: 2,
        address: "555 Durham Ave",
        type: "House",
        noBeds: 8,
        noBaths: 6,
        rentPrice: 4000,
        furnished: "Yes",
        squareFeet: 4200,        
    },
    {
        propertyID: 3,
        address: "21 University Drive",
        type: "House",
        noBeds: 2,
        noBaths: 2,
        rentPrice: 1200,
        furnished: "No",
        squareFeet: 900,        
    },  
    {
      propertyID: 1,
      address: "125 Example Street",
      type: "Duplex",
      noBeds: 5,
      noBaths: 5,
      rentPrice: 3000,
      furnished: "Yes",
      squareFeet: 2800,
  },
  {
      propertyID: 2,
      address: "17 Barstow Drive",
      type: "House",
      noBeds: 8,
      noBaths: 6,
      rentPrice: 4000,
      furnished: "Yes",
      squareFeet: 4200,        
  },
  {
      propertyID: 3,
      address: "954 Forest Hills Drive",
      type: "House",
      noBeds: 2,
      noBaths: 2,
      rentPrice: 1200,
      furnished: "No",
      squareFeet: 900,        
  },   
  {
    propertyID: 2,
    address: "17 Barstow Drive",
    type: "House",
    noBeds: 8,
    noBaths: 6,
    rentPrice: 4000,
    furnished: "Yes",
    squareFeet: 4200,        
},
{
    propertyID: 3,
    address: "954 Forest Hills Drive",
    type: "House",
    noBeds: 2,
    noBaths: 2,
    rentPrice: 1200,
    furnished: "No",
    squareFeet: 900,        
}               
  ])  

  return (
    <BrowserRouter>
      <div className="App">
                
          <Routes>
            <Route exact path="/" element={<div><Login/></div>}/>
            <Route exact path="/search" element={<div><Navbar/><Search/></div>}/>
            <Route exact path="/search-results" element={<div><Navbar/><Search/><SearchResults searchResults={searchResults}/></div>}/>
            <Route exact path="/profile" element={<div><Navbar/><Profile/></div>}/>
            <Route exact path="/register" element={<div><UserRegistration/></div>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
