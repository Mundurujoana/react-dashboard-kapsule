import Render from "./Render.js";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login.js";
import Signup from "./Signup.js";
import ProtectedRoute from "./ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
// import EditProfile from "./components/Navbar/EditProfile.js";


function App() {
  return (
    <div className="app">
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                     < Render/> 
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
    </div>
  );
}
export default App;
