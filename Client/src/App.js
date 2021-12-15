import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Test from './Test.js';
import Login from './Pages/Login';
import Profile from  './Pages/Profile';
import Navbar from './Components/Navbar';
import Search from './Pages/Search';
import SearchResults from './Pages/SearchResults';

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
    <div className="App">
      <Navbar></Navbar>
      <Search/>
      <SearchResults searchResults={searchResults}/>
    </div>
  );
}

export default App;
