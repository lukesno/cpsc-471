import logo from './logo.svg';
import './App.css';
import Test from './Test.js';
import Login from './Pages/Login';
import Profile from  './Pages/Profile';
import Navbar from './Components/Navbar';
import Search from './Pages/Search';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Search/>
    </div>
  );
}

export default App;
