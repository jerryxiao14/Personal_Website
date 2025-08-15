import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import { Box } from '@mui/material';



export default function PersonalWebsite() {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: "250px" }}>
          <Routes>
            <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
            <Route path="/about" element={<h1>About Us</h1>} />
            <Route path="/contact" element={<h1>Contact Us</h1>} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
