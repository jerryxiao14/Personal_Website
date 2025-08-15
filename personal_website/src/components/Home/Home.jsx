import React from "react";

import {Box, Typography} from '@mui/material'
import {ReactTyped} from 'react-typed'

export default function Home(){
    
    const heroText = "Hi, I'm Jerry Xiao:\nAspiring Software \nEngineer, Student,\n and Problem Solver!";
    
    return (
        <Box
            sx = {{
                mt:10,
                display:'flex',
                backgroundColor: 'black',
                width: '100%',
                //border:1,
                //borderColor: 'white'
            }}
        >
            {/*Hero section */}
            <Typography
                variant = 'h2'
                sx = {{
                    textTransform: 'uppercase',
                    color: 'white',
                    whiteSpace: 'pre-line',
                }}
            >
                <ReactTyped
                strings={[heroText]}
                typeSpeed={50}
                backSpeed={0}  // do not erase if you want lines to stay
                showCursor={true}
                loop
                />
            </Typography>
        </Box>
    )
}