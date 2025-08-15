import React from 'react';
import {Box, Typography,List, ListItem, ListItemIcon} from '@mui/material';


export default function Sidebar() {
    
    const menuItems = [
        {text:'About Me', icon: <ListItemIcon/>, path: "/about"},
        {text: 'Skills & Experience', icon: <ListItemIcon/>, path: ""},
        {text: 'Achievements', icon: <ListItemIcon/>, path: "" },
        {text: 'Projects', icon: <ListItemIcon/>, path: ""}
        , 'Contact'
    ]
    
    
    return (
        <Box
            sx = {{
                width: 250,
                height: '100vh',
                backgroundColor: '#f5f5f5',
                borderRight: "1px solid #ddd",
                p: 2,
                position: 'fixed',
            }}
        >
            <Typography variant = "h6" sx = {{mb: 2}}> Jerry Xiao </Typography>
            <List>
                {
                    menuItems.map((item, index) => (
                        <ListItem button key={index} sx={{mb: 1}}>
                            <Typography variant="body1">{item.text}</Typography>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    )
}