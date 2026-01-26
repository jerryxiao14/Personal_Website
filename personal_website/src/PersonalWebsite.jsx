import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header.jsx';
import Home from './components/Home/Home.jsx';
import Footer from './components/Footer.jsx';
import AboutMe from './components/AboutMe/AboutMe'
import Experience from './components/Experience/Experience.jsx';
import Contact from './components/Contact/Contact.jsx';
import { Box } from '@mui/material';
import Achievements from './components/Achievements/Achievements.jsx';



import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

function ScrollToTop(){
  const {pathname} = useLocation();

  useEffect(()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:"smooth"
    })
  },[pathname]);

  return null;
}

export default function PersonalWebsite() {
  return (
    <Router>
      <ScrollToTop/>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%',backgroundColor:'black' }}>
        {/* Header at the top */}
        <Header/>

        {/* Main content area: Sidebar + Page */}
        <Box sx={{ display: 'flex', flex: 1, backgroundColor: 'black' }}>
          {/* Sidebar on the left */}
          {/*<Sidebar />*/}

          {/* Page content on the right */}
          <Box component="main" sx={{ flexGrow: 1, p: 3}}>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/experience" element={<Experience />}/>
              <Route path="/achievements" element = {<Achievements/>}/>
            </Routes>
          </Box>
        </Box>

        <Footer />
      </Box>
    </Router>
  );
}
