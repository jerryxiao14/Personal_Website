import React from "react";

import {Box, Typography, Container,Button, Card, CardContent} from '@mui/material'
import {ReactTyped} from 'react-typed'
import JerryX from "../AboutMe/images/jerryx.jpg"

import FakeSO from '../Home/photo_gallery/fakeso.png'
import icpc24 from '../Home/photo_gallery/icpc24.jpg'
import jpmorgan_quant from '../Home/photo_gallery/jpmorgan_quant_research.png'
import zaipu from '../Home/photo_gallery/zaipu_main.png'

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Link as RouterLink } from "react-router-dom";


const achievements = [
  {
    title: "9th Place – 2025 Rutgers University Programming Contest",
    organization: "Rutgers University Competitive Programming",
    date: "2025-11",
    description:
      "Placed 9th in a multi-university competitive programming contest focused on algorithmic problem solving.",
    media: null,
  },
  {
    title: "13th Place – ICPC Greater New York Regional",
    organization: "ACM ICPC",
    date: "2024-11",
    description:
      "Competed against top university teams in the ICPC Greater New York Regional contest.",
    media: icpc24,
  },
  {
    title: "1st Place – Stony Brook ICPC Selection Contest (Senior Division)",
    organization: "Stony Brook Competitive Programming",
    date: "2024-10",
    description:
      "Won first place in the senior division ICPC selection contest at Stony Brook University.",
    media: JerryX,
  },
  {
    title: "University Scholars Scholarship",
    organization: "Stony Brook University",
    date: "2022-08",
    description:
      "Awarded for outstanding academic performance and research potential.",
    media: null,
  },
  {
    title: "3rd Place – ICPC Selection Contest (Junior Division)",
    organization: "Stony Brook University",
    date: "2022-12",
    description:
      "Placed third in the junior division ICPC selection contest.",
    media: null,
  },
  {
    title: "High School Athletic Excellence Awards",
    organization: "W.C. Mepham High School",
    date: "2022-06",
    description:
      "Received senior excellence awards in basketball, badminton, and tennis.",
    media: null,
  },
  {
    title: "National Merit Honorable Mention",
    organization: "National Merit Scholarship Program",
    date: "2020-09",
    description:
      "Recognized nationally for academic achievement and standardized test performance.",
    media: null,
  },
];


const sortedAchievements = [...achievements].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);


function AchievementsSection() {
  return (
    <Box sx={{ width: "70%", mt: 10, mx:"auto", px:4, mb: 10}}>
      <Typography
        variant="h3"
        sx={{
          color: "white",
          fontWeight: 300,
          mb: 2,
          textTransform: "uppercase",
          textAlign: "center"
        }}
      >
        Awards & Achievements
      </Typography>

      <Typography
        sx={{
            color: "grey",
            maxWidth: "800px",
            mb: 6,
            lineHeight: 1.6,
            textAlign: "center",
            mx: "auto",  
        }}
        >
        A selection of academic, competitive programming, and extracurricular
        achievements, ordered by recency.
      </Typography>


      <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {sortedAchievements.map((item, index) => (
          <Card
  key={index}
  sx={{
    backgroundColor: "#111",
    border: "1px solid #2a2a2a",
    borderRadius: 3,
    display: "flex",
    justifyContent: "space-between",
    overflow: "hidden",
    transition: "transform 0.25s ease",
    "&:hover": {
      transform: "translateY(-4px)",
    },
  }}
>
  {/* LEFT: TEXT CONTENT */}
  <CardContent
    sx={{
      flex: 1,
      pr: item.media ? 4 : 0, // spacing before image
    }}
  >
    <Typography
      sx={{
        color: "white",
        fontSize: "20px",
        fontWeight: 500,
        mb: 1,
      }}
    >
      {item.title}
    </Typography>

    <Typography
      sx={{
        color: "#2cb0d8ff",
        fontSize: "14px",
        mb: 2,
      }}
    >
      {item.organization} • {item.date.slice(0, 4)}
    </Typography>

    <Typography
      sx={{
        color: "#ccc",
        fontSize: "15px",
        lineHeight: 1.7,
        maxWidth: "600px",
      }}
    >
      {item.description}
    </Typography>
  </CardContent>

  {/* RIGHT: MEDIA */}
  {item.media && (
    <Box
      component="img"
      src={item.media}
      alt={item.title}
      sx={{
        width: 240,
        objectFit: "cover",
      }}
    />
  )}
</Card>

        ))}
      </Box>
    </Box>
  );
}



export default function Achievements(){
    return (
        <Box>
            <AchievementsSection/>
        </Box>
    )
}