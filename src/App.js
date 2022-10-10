import Navbar from "./components/Navbar/Navbar"
import Sidenav from './components/Sidenav/Sidenav'
import Home from './components/Home/Home'
import './App.css'


function App() {
  return (
    <div className="App">
     < Navbar/>
     <div className="container">
     < Sidenav/>  
   <Home/>
    </div>
    </div>
  );
}

export default App;
