import React from "react";

import {Box, Typography, Container,Button} from '@mui/material'
import {ReactTyped} from 'react-typed'
import JerryX from "../AboutMe/images/jerryx.jpg"

import FakeSO from './photo_gallery/fakeso.png'
import icpc24 from './photo_gallery/icpc24.jpg'
import jpmorgan_quant from './photo_gallery/jpmorgan_quant_research.png'
import zaipu from './photo_gallery/zaipu_main.png'

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Link as RouterLink } from "react-router-dom";

export default function Home(){
    
    const heroText = "Hi, I'm Jerry Xiao:\nSoftware Engineer,\n Student,\n and Problem Solver!";
    
    const images = [
        {src: FakeSO, text: "Fake Stack Overflow"},
        {src: zaipu, text: "Zaipu - Financial Analytics and Forecasting Tool"},
        {src: icpc24, text: "ICPC Greater NY Regional 2024"},
        {src: jpmorgan_quant, text: "Forage - J.P. Morgan Quant Research Simulation"}
        
    ]

    const expertise = [
        {title: "Fullstack Development", attributes: ["Web Applications", "REST APIs", "Secure Authentication", "Cloud Services", "Database Management", "Data Visualization"]},
        {title: "Competitive Programming", attributes: ["Problem Solving", "Algorithm Design", "Data Structures", "Time Complexity Analysis","Dynamic Programming", "Algorithmic Optimization"]},
        {title: "AI & Data Science", attributes: ["LLM Integration", "Prompt Engineering", "Data Analytics", "Computational Finance", "Machine Learning Models", "Visualization Tools"]},
        {title: "Software Engineering", attributes: ["Version Control", "Agile Methodologies", "Testing & Debugging", "CI/CD Pipelines", "Code Reviews", "API Optimization"]},
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
                    {"Software Engineer passionate for Full-Stack Development,\n Competitive Programming, and AI Projects"}
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

            {/*Brief about me section which also will link to more detailed about me page*/}
            <Box
                sx = {{
                    display: 'flex',
                    mt: 10,
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx = {{
                        flex:1
                    }}
                >
                <Typography
                    sx={{
                        fontSize: "30px",
                        textTransform: "uppercase",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        ml: 10,
                    }}
                >
                    <FiberManualRecordIcon sx={{ fontSize: "18px" }} />
                    About Me
                </Typography>


                </Box>
                
                {/* full box for about me section */}
                <Box
                    sx = {{
                        flex:1,
                        display: 'flex-column',
                        mr: 10,
                    }}
                >
                    <Typography
                        sx = {{
                            fontSize: "32px",
                            letterSpacing: 1.5,
                        }}
                    >
                        I create intelligent, user-focused applications that combine data, algorithms, and design to turn complex problems into seamless digital experiences.
                    </Typography>
                    

                    {/* Content for about me section */}
                    <Box
                        sx = {{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mt: 10,
                            mb:10,
                        }}
                    >
                        {/* # of projects done */}
                        <Box
                            sx = {{
                                display: 'flex-column',
                            }}>
                            <Typography
                                variant = 'h1'
                            >
                                5+
                            </Typography>

                            <Box
                                sx = {{
                                    backgroundColor: 'white',
                                    height:'2px',
                                    width: 300,
                                    borderRadius:2,
                                    mt:1.5,
                                    mb:1.5,
                                }}
                            >
                            </Box>

                            <Typography
                                sx = {{
                                    fontSize: '20px',
                                }}>
                                Completed Projects
                            </Typography>
                        </Box>

                        <Box
                            sx = {{
                                display: 'flex-column'
                            }}
                        >
                            <Typography
                                variant = 'h1'
                            >
                                1+
                            </Typography>

                            <Box
                                sx = {{
                                    backgroundColor: 'white',
                                    height:'2px',
                                    width: 300,
                                    mt:1.5,
                                    mb:1.5,
                                    borderRadius:2,
                                }}
                            >
                            </Box>

                            <Typography
                                sx = {{
                                    fontSize: '20px'
                                }}>
                                Years of Experience
                            </Typography>
                        </Box>
                    <Box/>
                    </Box>

                    <Button
                        component={RouterLink}
                        to="/about"
                        endIcon={<NorthEastIcon/>}
                        sx={{
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: 10,          
                            px: 3, py: 1,             
                            mt: 4,                   
                            fontSize: "16px",
                            border: "0.5px solid white",
                            width: 250,
                            height: 75,
                            "&:hover": {
                            backgroundColor: "#222",
                            },
                        }}
                        >
                        More About Me
                    </Button>

                </Box>
                
                
            </Box>


            <Box
                sx = {{
                    backgroundColor: 'white',
                    height:'2px',
                    width:'93%',
                    mt: 10,
                    mx: 'auto',
                    borderRadius:2,
                }}
            />
            
            <Box
                sx = {{
                    display: 'flex-column',
                    mt: 10,
                    ml: 10,
                }}
            >
                <Typography
                    sx={{
                        fontSize: "30px",
                        textTransform: "uppercase",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb:2,
                        
                    }}
                >
                    <FiberManualRecordIcon sx={{ fontSize: "18px" }} />
                    Expertise
                </Typography>

                <Typography
                    variant = 'h1'
                    sx = {{
                        textTransform: 'uppercase',
                    }}
                >
                    What I Do
                </Typography>

            </Box>
            
            {
                // Expertise boxes
                expertise.map((item,index) => {
                    const mid = Math.ceil(item.attributes.length / 2);
                    const col1 = item.attributes.slice(0,mid);
                    const col2 = item.attributes.slice(mid);

                    return (
                        <Box>
                            <Box
                                sx = {{
                                    backgroundColor: 'gray',
                                    height:'2px',
                                    width:'93%',
                                    mx: 'auto',
                                    mt: 10,
                                    borderRadius:2,
                                }}
                            />
                            <Box
                                sx = {{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    ml: 10,
                                    mt: 15,
                                    mb: 5,
                                }}
                            >
                                
                                <Box
                                    sx = {{
                                        //border:1,
                                        //borderColor: 'red'
                                    }}
                                >
                                    <Typography
                                        variant = 'h2'
                                        sx = {{
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Box>
                                <Box
                                    sx = {{
                                        color: 'gray',
                                        display: 'flex',
                                        width: '475px',
                                        mr: 15,
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Box
                                        sx = {{
                                            display: 'flex-column',
                                        }}
                                    >
                                        {col1.map((attr,index) => (
                                            <Typography
                                                sx = {{
                                                    fontSize: "20px",
                                                }}
                                            >
                                                {attr}
                                            </Typography>
                                        ))}
                                    </Box>

                                    <Box
                                        sx = {{
                                            display: 'flex-column',
                                        }}
                                    >
                                        
                                        {col2.map((attr,index) => (
                                            <Typography
                                                sx = {{
                                                    fontSize: "20px",
                                                }}
                                            >
                                                {attr}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Box>

                            </Box>
                        </Box>

                    )
                })
            }
            
            <Box
                sx = {{
                    backgroundColor: 'white',
                    height:'2px',
                    width:'93%',
                    mx: 'auto',
                    mt: 20,
                    mb: 10,
                    borderRadius:2,
                }}
            />

            <Box
                sx = {{
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Typography
                    sx = {{
                        textTransform: 'uppercase',
                        fontSize: '25px',
                        mb: 5,
                        mt: 5,
                    }}
                >
                    Have a project in mind?
                </Typography>

                <Typography
                    sx = {{
                        textTransform: 'uppercase',
                        fontSize: '125px',
                        mb: 5,
                    }}
                >
                    Let's Work Together!
                </Typography>

                <Button
                    component={RouterLink}
                    to="/about"
                    sx={{
                        backgroundColor: "black",
                        color: "white",
                        borderRadius: 10,          
                        px: 3, py: 1,             
                        mt: 4,                   
                        fontSize: "16px",
                        border: "0.5px solid white",
                        width: 200,
                        height: 90,
                        "&:hover": {
                        backgroundColor: "#222",
                        },
                    }}
                    >
                    Get In Touch
                </Button>
            </Box>

            <Box
                sx = {{
                    backgroundColor: 'white',
                    height:'2px',
                    width:'93%',
                    mx: 'auto',
                    mt: 20,
                    mb: 10,
                    borderRadius:2,
                }}
            />
        </Box>
    )
}