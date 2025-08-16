import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header.jsx';
import Home from './components/Home/Home.jsx';
import AboutMe from './components/AboutMe/AboutMe'
import { Box } from '@mui/material';



export default function PersonalWebsite() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%',backgroundColor:'black' }}>
        {/* Header at the top */}
        <Header />

        {/* Main content area: Sidebar + Page */}
        <Box sx={{ display: 'flex', flex: 1, backgroundColor: 'black' }}>
          {/* Sidebar on the left */}
          {/*<Sidebar />*/}

          {/* Page content on the right */}
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<h1>Contact Us</h1>} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}
