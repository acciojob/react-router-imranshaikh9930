
import React from "react";
import './../styles/App.css';
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import  { BrowserRouter, Routes,Route ,NavLink} from 'react-router-dom'

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        
        <BrowserRouter>
        <ul>
          <NavLink to="/">
          <li>Home</li>
          </NavLink>
            
          <NavLink to="/about">
          <li>About us</li>

          </NavLink>
        </ul>
          <Routes>

            <Route path="/" element={<Homepage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
