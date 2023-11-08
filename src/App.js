import React from "react";
import Admin from "./admin/Admin";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Blogs from "./pages/Blogs";


function App() {
  return (
    <div>
      
       <Router>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Blogs" element={<Blogs />} />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
