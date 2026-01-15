import { fontFamily } from "@mui/system";
import React from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@mui/material";
import { Box, Typography } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {

  const navigate = useNavigate();
  const location = useLocation();

  const handleProjectsClick = () => {
        if (location.pathname === '/about') {
            const element = document.querySelector('#projects-section');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/about#projects');
        }
    };


  const menuItems = [
    { text: "HOME", path: "/" },
    { text: "ABOUT", path: "/about" },
    { text: "EXPERIENCE", path: "/experience" },
    { text: "ACHIEVEMENTS", path: "/achievements" },
    { text: "PROJECTS", action: handleProjectsClick },
    { text: "CONTACT", path: "/contact" },
  ];

  const socials = [
    {
      name: "Instagram",
      icon: <InstagramIcon sx={{ fontSize: 32 }} />, 
      link: "https://instagram.com/jerry.xiao14",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon sx={{ fontSize: 32 }} />,
      link: "https://www.linkedin.com/in/jerry-xiao-3696a7246/",
    },
    {
      name: "GitHub",
      icon: <GitHubIcon sx={{ fontSize: 32 }} />,
      link: "https://github.com/jerryxiao14",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        height: 70, 
        px: 3,
        fontFamily: "Inter, sans-serif",
        
      }}
    >
      {/* Left: name */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 500,
          fontSize: "28px", 
          color: "white",
          ml: 10,
        }}
      >
        JERRY XIAO
      </Typography>

      {/* Middle: menu */}
      <Box sx={{ display: "flex", gap: 5, height: "100%" }}>
        {menuItems.map((item) => (
          <Button
            key={item.text}
            onClick={item.action ? item.action : undefined}
            component={item.path ? Link : 'button'}
            to={item.path ? item.path : undefined}
            sx={{
              color: "white",
              fontWeight: 500,
              fontSize: "18px", // ⬆ bigger
              textTransform: "none",
              height: "100%",
              minWidth: "auto",
              px: 2,
            }}
          >
            {item.text}
          </Button>
        ))}
      </Box>

      {/* Right: socials */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          height: "100%",
          mr: 10,
        }}
      >
        {socials.map((social, index) => (
          <Button
            key={index}
            component="a"
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              fontSize: "28px", // affects text if added later
              textTransform: "none",
              height: "100%",
              minWidth: "auto",
            }}
            startIcon={social.icon}
          />
        ))}
      </Box>
    </Box>
  );
}
