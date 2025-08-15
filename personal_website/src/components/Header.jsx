import React from 'react';
import {Box, Button, Typography,List, ListItem, ListItemIcon, ListItemButton} from '@mui/material';
import {
  Home as HomeIcon,
  Work as WorkIcon,
  EmojiEvents as EmojiEventsIcon,
  Code as CodeIcon,
  Mail as MailIcon
} from "@mui/icons-material";
import { Link } from 'react-router-dom'; 

export default function Header() {
    
    const menuItems = [
        {text:'About', icon: <HomeIcon/>, path: "/about"},
        {text: 'Skills & Experience', icon: <WorkIcon/>, path: ""},
        {text: 'Achievements', icon: <EmojiEventsIcon/>, path: "" },
        {text: 'Projects', icon: <CodeIcon/>, path: ""}, 
        {text: 'Contact', icon: <MailIcon/>, path: "/contact"}
    ]

    const leftMenuItems = [
        {text: 'HOME', path: '/'},
        {text:'ABOUT', path: '/about'},
        {text:'EXPERIENCE', path: '/experience'}
    ]
    
    const rightMenuItems = [
        {text: 'ACHIEVEMENTS', path: '/achievements'},
        {text: 'PROJECTS', path: '/projects'},
        {text: 'CONTACT', path: '/contact'}
    ]
    // lets do for the top nav_bar, Home, About, Experience,
    // Then my name in capital letters -> Achievements, Projects, Contact

    return (
        <Box
            sx = {{
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
                backgroundColor: 'black',
                color: 'white',
                height: 60,
                px: 3, 
                position: 'relative',
                fontFamily: 'Inter, sans-serif'
            }}
        >
            {/* Left menu options*/}
            <Box sx = {{display: 'flex', gap:5,height: '100%'}}>
                {leftMenuItems.map((item) => (
                    <Button
                        key = {item.text}
                        component = {Link}
                        to = {item.path}
                        sx = {{
                            color: 'white',
                            fontWeight: 500,
                            fontSize: '16px',
                            textTransform: 'none',
                            height: '100%',
                            minWidth: 'auto',
                            px:2
                            //border:1,
                            //borderColor:'white'
                        }}
                    >
                        {item.text}
                    </Button>
                ))

                }

            </Box>


            {/* My name centered */}
            <Typography
                variant = "h6"
                sx = {{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontWeight: 500,
                    fontSize: "24px",
                    color: "white"
                }}
            >
                JERRY XIAO
            </Typography>

            {/* Right menu options */}
            
            <Box sx = {{display: 'flex', gap:5,height: '100%'}}>
                {rightMenuItems.map((item) => (
                    <Button
                        key = {item.text}
                        component = {Link}
                        to = {item.path}
                        sx = {{
                            color: 'white',
                            fontWeight: 500,
                            fontSize: '16px',
                            textTransform: 'none',
                            height: '100%',
                            minWidth: 'auto',
                            px:2
                            //border:1,
                            //borderColor:'white'
                        }}
                    >
                        {item.text}
                    </Button>
                ))

                }

            </Box>
        </Box>
    )
}