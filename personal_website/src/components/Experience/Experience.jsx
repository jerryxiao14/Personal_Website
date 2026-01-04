import { fontFamily } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {useRef} from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Card, CardContent, IconButton, Collapse } from "@mui/material";
import { useState } from "react";
import {ReactTyped} from 'react-typed'
import { Link as RouterLink } from 'react-router-dom';
import DownloadIcon from "@mui/icons-material/Download";


const experience = [
    {
        title:"Software Engineer Intern",
        org:"Broadridge Financial Solutions",
        date:"May 2025 - Aug 2025",
        details:[
            "bullet point one",
            "bullet point two",
        ]

    },
]

const education = [
    {
        title:"B.Sc. Computer Science + Applied Mathematics",
        org: "Stony Brook University",
        date: "Aug 2022 - May 2026 (Expected)",
        details: [
            "bullet point one",
            "bullet point two",
        ]
    }
]

const heroText = "I build software that brings clarity to complexity."
const descText = "Full-stack engineer experienced in React, Python, and backend APIs, building data-driven tools that automate analysis and reduce manual decision-making."

function TimelineCard({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ position: "relative", pl: 4, mb: 6 }}>
      {/* Timeline dot */}
      <Box
        sx={{
          position: "absolute",
          left: 6,
          top: 20,
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "white",
        }}
      />

      <Card
        sx={{
          backgroundColor: "#111",
          color: "white",
          border: "1px solid #333",
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography variant="h6">{item.title}</Typography>
              <Typography sx={{ color: "gray" }}>{item.org}</Typography>
              <Typography sx={{ fontSize: 14, mt: 1 }}>
                {item.summary}
              </Typography>
            </Box>

            <IconButton onClick={() => setOpen(!open)} sx={{ color: "white" }}>
              <ExpandMoreIcon
                sx={{
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "0.3s",
                }}
              />
            </IconButton>
          </Box>

          <Collapse in={open}>
            <Box mt={2}>
              <Typography sx={{ color: "gray", mb: 1 }}>
                {item.date}
              </Typography>

              {item.details.map((d, i) => (
                <Typography key={i} sx={{ fontSize: 14 }}>
                  • {d}
                </Typography>
              ))}
            </Box>
          </Collapse>
        </CardContent>
      </Card>
    </Box>
  );
}


function TimelineColumn({ title, items }) {
  return (
    <Box sx={{ flex: 1 }}>
      <Typography
        variant="h3"
        sx={{
          color: "white",
          textTransform: "uppercase",
          mb: 4,
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          position: "relative",
          pl: 3,
          borderLeft: "2px solid white",
        }}
      >
        {items.map((item, idx) => (
          <TimelineCard key={idx} item={item} />
        ))}
      </Box>
    </Box>
  );
}

function HeaderSection({timelineRef}){
    return (
        <Box
            sx = {{
                alignItems: 'center',
                justifyContent: 'center',
                //border: "2px solid red",
                m:23,

            }}
        >
            <Typography
                variant="h1"
                sx={{
                    //textTransform: "uppercase",
                    color: "white",
                    whiteSpace: "pre-line",
                    textAlign: "center",
                    width: "40%",
                    //border:"2px solid purple",
                    mx: "auto",
                    fontWeight: 700,
                }}
            >
                {heroText}
            </Typography>
            <Typography
                variant="h5"
                sx={{
                    color: "gray",
                    ml: 10,
                    mt: 5,
                    whiteSpace: "pre-line",
                    textAlign: "center",
                    width: "30%",
                    mx: "auto"
                }}
            >
                {descText}
            </Typography>
            <Box 
                sx = {{
                    //border:"2px solid green",
                    justifyContent: "center",
                    alignContent: "center",
                    display: "flex",
                    gap: 5,
                    mt: 5
                }}
            >
                <Button
                    onClick = {() => timelineRef.current.scrollIntoView({behavior: "smooth"})}
                    sx = {{
                        color: "white",
                        border: "1px solid white",
                        borderRadius: 10,
                        backgroundColor: "transparent", // default background
                        '&:hover': {
                            backgroundColor: "#f0f0f0", // whitish gray color on hover
                            color: "#333333",
                        }
                    }}
                >
                    View Experience
                </Button>

                <Button
                    component = {RouterLink}
                    to = "/contact"
                    sx = {{
                        color: "white",
                        border: "1px solid white",
                        borderRadius:10,
                        backgroundColor: "transparent",
                        '&:hover': {
                            backgroundColor: "#f0f0f0",
                            color: "#333333",
                        }
                    }}
                >
                    Contact Me
                </Button>

                <Button
                    startIcon = {<DownloadIcon/>}
                    href = "Assets/Resume_Ruijie_Xiao_SWE.pdf"
                    download
                    sx = {{
                        px: 2,
                        py: 1,
                        color: "#2cb0d8ff",
                        border: "1px solid #2cb0d8ff",
                        borderRadius: 10,
                        backgroundColor: "transparent",
                        '&:hover': {
                            backgroundColor: "#e6f7ff",
                            color: "#005b8dff",
                        }
                    }}
                >
                    Resume
                </Button>
            </Box>
                            
        </Box>
    )
}

export default function Experience() {
    const timelineRef = useRef(null);
  return (
    <Box ref = {timelineRef}>
        <HeaderSection timelineRef = {timelineRef}/>
        <Box
          sx={{
            width: "90%",
            height: "2px",
            backgroundColor: "white",
            mx: "auto",
            mt: 8,
            mb: 10,
            borderRadius: 2,
            opacity: 0.8,
          }}
        />
        <Box 
        sx={{
            display: "flex",
            gap: 10,
            px: 10,
            mt: 10,
            backgroundColor: "black",
            minHeight: "100vh",
        }}
        >
        <TimelineColumn title="Work Experience" items={experience} />
        <TimelineColumn title="Education" items={education} />
        </Box>
    </Box>
    
  );
}
