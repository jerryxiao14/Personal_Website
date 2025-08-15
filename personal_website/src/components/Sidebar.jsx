import React from 'react';
import {Box, Typography,List, ListItem, ListItemIcon, ListItemButton} from '@mui/material';
import {
  Home as HomeIcon,
  Work as WorkIcon,
  EmojiEvents as EmojiEventsIcon,
  Code as CodeIcon,
  Mail as MailIcon
} from "@mui/icons-material";
import { Link } from 'react-router-dom'; 

export default function Sidebar() {
    
    const menuItems = [
        {text:'About Me', icon: <HomeIcon/>, path: "/about"},
        {text: 'Skills & Experience', icon: <WorkIcon/>, path: ""},
        {text: 'Achievements', icon: <EmojiEventsIcon/>, path: "" },
        {text: 'Projects', icon: <CodeIcon/>, path: ""}, 
        {text: 'Contact', icon: <MailIcon/>, path: "/contact"}
    ]
    
    
    return (
        <Box
            sx = {{
                width: 250,
                height: '100vh',
                backgroundColor: '#f5f5f5',
                borderRight: "1px solid #ddd",
                p:2
                //position: 'fixed',
            }}
        >
            <Typography variant = "h6" sx = {{mb: 2}}> Jerry Xiao </Typography>
            <List>
                {menuItems.map((item, index) => (
                    <ListItemButton
                        key={index}
                        component={Link}
                        to={item.path}
                        sx={{ mb: 1 }}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <Typography variant="body1">{item.text}</Typography>
                    </ListItemButton>
                ))}
            </List>
        </Box>
    )
}