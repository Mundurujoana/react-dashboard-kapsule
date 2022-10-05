import Navbar from "./components/Navbar/Navbar";
import Sidenav from './components/Sidenav/Sidenav'


function App() {
  return (
    <div className="App">
     < Navbar/>
     <div className="sideContainer">
     < Sidenav/>
     {/* <div className="container">other pages</div> */}
     </div>
    </div>
  );
}

export default App;
