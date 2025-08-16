import React from "react";

import {Box, Typography, Container} from '@mui/material'
import {ReactTyped} from 'react-typed'
import JerryX from "../AboutMe/images/jerryx.jpg"

import FakeSO from './photo_gallery/fakeso.png'
import icpc24 from './photo_gallery/icpc24.jpg'
import jpmorgan_quant from './photo_gallery/jpmorgan_quant_research.png'
import zaipu from './photo_gallery/zaipu_main.png'


export default function Home(){
    
    const heroText = "Hi, I'm Jerry Xiao:\nAspiring Software \nEngineer, Student,\n and Problem Solver!";
    
    const images = [
        {src: FakeSO, text: "Fake Stack Overflow"},
        {src: zaipu, text: "Zaipu - Financial Analytics and Forecasting Tool"},
        {src: icpc24, text: "ICPC Greater NY Regional 2024"},
        {src: jpmorgan_quant, text: "Forage - J.P. Morgan Quant Research Simulation"}
        
    ]
    
    return (
        <Box
            sx = {{
                backgroundColor: 'black',
                width: '100%',
                fontFamily: 'Inter, sans-serif',
                color: 'white'
            }}
        >
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
                        //position: "absolute",
                        mr: 18,
                        height: 375,       // adjust as needed
                        width: "auto",
                    }}
                />
            </Box>

            {/*Divider line */}
            <Box
                sx = {{
                    backgroundColor: 'white',
                    height:'2px',
                    width:'93%',
                    mx: 'auto',
                    borderRadius:2,
                }}
            />

            {/* Hero footer */}
            <Box sx = {{
                mt: 6,
                height: 60,
                display: 'flex',
                justifyContent: 'space-between',
                mb: 5
            }}>
                <Typography
                    sx = {{
                        whiteSpace: 'pre-line',
                        ml: 7.75,
                        fontSize: "22px",
                    }}
                >
                    {"Based in Bellmore, NY\nCS+AMS @ Stony Brook,"}
                </Typography>

                <Typography
                    sx = {{
                        whiteSpace: 'pre-line',
                        fontSize: "22px",
                        mr: 8,
                        
                    }}
                >
                    {"SWE Intern passionate for Full-Stack Development,\n Competitive Programming, and AI Projects"}
                </Typography>

            </Box>

            {/* Photo Gallery */}
            <Box
                sx = {{
                    display: 'grid',
                    gridTemplateColumns: "repeat(2,1fr)",
                    gap:2,
                    width: "93%",
                    mx: "auto",
                    mt:10,
                    backgroundColor: 'black',
                }}
            >
                {
                    images.map((item,index) => (
                        <Box
                            key = {index}
                            sx = {{
                                position: "relative",
                                overflow: "hidden",
                                borderRadius:2,
                                boxShadow: 3,
                                "&:hover .overlay": {
                                bottom: 0, // slide up when parent is hovered
                                },
                                "&:hover img": {
                                transform: "scale(1.1)", // zoom effect
                                },
                            }}
                            
                        >
                            <Box
                                component = "img"
                                src = {item.src}
                                alt = {item.text}
                                sx = {{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    transition: "transform 0.5s ease",
                                }}
                            />

                            <Box
                                className="overlay"
                                sx = {{
                                    position: "absolute",
                                    bottom: "-100%",
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    bgcolor: "rgba(0,0,0,0.6)",
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    p:2, 
                                    textAlign: "center",
                                    transition: "bottom 0.5s ease",
                                }}
                            >
                                <Typography variant = "h6">{item.text}</Typography>
                            </Box>
                        </Box>
                ))}

            </Box>
            
        </Box>
    )
}