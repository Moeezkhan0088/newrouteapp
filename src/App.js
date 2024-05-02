// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
// import AboutUs from './pages/AboutUs'; // Assuming you have an AboutUs page

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="*" element={<h1>404 Page not found</h1>} />
                {/* <Route path="/aboutus" element={<AboutUs />} /> */}
                
            </Routes>
        </Router>
    );
}

export default App;
