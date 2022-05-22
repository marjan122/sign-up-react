import React from "react";
import NavRoute from "./Navbar";
import Dashboard from "./dashboard";
import HelperTextAligned from "./Home";
import Signup from "./signup";
import {
  BrowserRouter as Router,  Routes, Route,
} from "react-router-dom";

export default function AppRoute() {
  return (
    <Router>
     <NavRoute />
     <Routes>
       <Route path="/home" element={<HelperTextAligned />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/dashboard" element={<Dashboard />} />
     </Routes>
    </Router>
  );
}
