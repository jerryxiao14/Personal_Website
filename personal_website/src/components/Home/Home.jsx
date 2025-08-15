import React from "react";

import {Box, Typography, Container} from '@mui/material'
import {ReactTyped} from 'react-typed'
import JerryX from "../AboutMe/images/jerryx.jpg"

export default function Home(){
    
    const heroText = "Hi, I'm Jerry Xiao:\nAspiring Software \nEngineer, Student,\n and Problem Solver!";
    
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between", // text left, image right
                    mt: 5,
                    width: "100%",

                }}
            >
                {/* Typing text */}
                <Box sx={{ flex: 1, mr: 4, height: "70vh", }}> {/* reserve space for text */}
                    <Typography
                    variant="h2"
                    sx={{
                        textTransform: "uppercase",
                        color: "white",
                        whiteSpace: "pre-line",
                        ml:10,
                        mt:8
                    }}
                    >
                    <ReactTyped
                        strings={[heroText]}
                        typeSpeed={50}
                        backSpeed={0}
                        showCursor={true}
                        loop
                    />
                    </Typography>
                </Box>

                {/* Image fixed to right */}
                <Box
                    component="img"
                    src={JerryX}
                    alt="Jerry"
                    sx={{
                        position: "absolute",
                        right: 190,
                        height: 375,       // adjust as needed
                        width: "auto",
                    }}
                />
            </Box>

            <Box
                sx = {{
                    backgroundColor: 'white',
                    height:'2px',
                    width:'93%',
                    mx: 'auto'
                }}
            />

            
        </Box>
    )
}