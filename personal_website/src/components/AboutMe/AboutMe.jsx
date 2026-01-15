import React, {useRef, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";
import {Box, Typography, Avatar, Chip, Grid, Card, CardContent, CardMedia, CardActions, Button, Stack} from '@mui/material'

import JerryX from './images/jerryx.jpg'
import { LocationOn } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { Phone } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'

import FakeSO from '../Home/photo_gallery/fakeso.png'
import icpc24 from '../Home/photo_gallery/icpc24.jpg'
import jpmorgan_quant from '../Home/photo_gallery/jpmorgan_quant_research.png'
import zaipu from '../Home/photo_gallery/zaipu_main.png'


import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiCplusplus,
  SiGo,
  SiGit,
} from 'react-icons/si'



const descText = `I’m a Software Engineer and Computer Science student at Stony Brook University, 
passionate about building data-driven systems that turn complex problems into clear, scalable solutions. 
My work spans full-stack development, backend APIs, and intelligent automation, with a strong focus on performance and usability.\n
Through industry and academic experience, I’ve designed React applications, built Python APIs, and integrated machine-learning 
workflows to automate analysis and reduce manual decision-making. I enjoy working across the full software lifecycle—from system design 
and implementation to optimization and deployment.`


function Header(){
    return (
        <Box
            sx = {{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
            }}
        >
            <Box
                sx = {{
                    width: '100%',
                    //border: '2px solid red',
                }}
            >
                <Typography
                    variant = 'h1'
                    sx = {{
                        color: "white",
                        mt: 23,
                        textAlign: 'center',
                        width: '100%',
                    }}
                >
                    About Me 
                </Typography>
                <Typography
                    variant = 'h5'
                    sx = {{
                        color: 'grey',
                        textAlign: 'center',
                        mt: 5,
                    }}
                >
                    Software Engineer & Full Stack Developer 
                </Typography>
            </Box>
        </Box>
    )
}

function Divider({mtopMargin, mWidth}){
    
    return (
        <Box
            sx = {{
                backgroundColor: '#252525ff',
                height:'2px',
                width: mWidth ? mWidth : '93%',
                mx: 'auto',
                borderRadius:2,
                mt: mtopMargin ? mtopMargin : 5,
            }}
        />
    );
}




function Description(){
  return (
    <Box
      sx = {{
        display: 'flex',
        width: '70%',
        //border: '2px solid red',
        mt: 10,
        ml: '15%',
      }}
    >
      <Box
        component = 'img'
        src = {JerryX}
        sx = {{
            width: '30%',
            mr: 10,
            borderRadius: 5,
        }}
      />
      <Box
       sx = {{
        display: 'flex',
        flexDirection: 'column',
        //border: '2px solid white',
       }}
      >
        <Typography
          variant = 'h2'
          sx = {{
            color: 'white',
            //textAlign: 'center',
            fontWeight: '300',
            mb: 2,
          }}
        >
            Jerry Xiao
        </Typography>

        <Typography
          variant = 'h6'
          sx = {{
            color: 'grey',
            //textAlign: 'center'
          }}
        >
            Software Engineer & Full Stack Developer
        </Typography>

        <Divider mtopMargin={5} mWidth={'100%'}/>

        <Typography
            variant = 'h6'
            sx = {{
                color: 'grey',
                whiteSpace: 'pre-line',
                mt: 5,
                maxWidth: '600px',
            }}
        >
            {descText}
        </Typography>
      </Box>
    </Box>
  )
}

const skillSections = [
  {
    title: 'Frontend',
    skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Material UI'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Python', 'Java', 'Go'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'Mongoose', 'SQL'],
  },
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'Go', 'JavaScript', 'TypeScript', 'C++'],
  },
  {
    title: 'Tools & Other',
    skills: ['GitHub', 'Axios'],
  },
];



const skillIconMap = {
  Python: <SiPython />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  'React.js': <SiReact />,
  'Node.js': <SiNodedotjs />,
  MongoDB: <SiMongodb />,
  SQL: <SiPostgresql />,
  'C++': <SiCplusplus />,
  Go: <SiGo />,
  GitHub: <SiGit />,
}


function SkillChip({ label }) {
  return (
    <Chip
      icon={skillIconMap[label]}
      label={label}
      sx={{
        backgroundColor: '#1f1f1f',
        height: 42,
        px: 1.5,
        color: 'white',
        border: '1px solid #2a2a2a',
        px: 1,
        fontSize: '1rem',
        transition: 'all 0.25s ease',
        '&:hover': {
          backgroundColor: '#2a2a2a',
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 18px rgba(44,176,216,0.25)',
        },
        '& .MuiChip-icon': {
          color: '#2cb0d8ff',
        },
      }}
    />
  )
}

function SkillCard({ title, skills }) {
  return (
    <Card
      sx={{
        backgroundColor: '#111',
        border: '1px solid #2a2a2a',
        borderRadius: 3,
        height: '100%',
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            mb: 2,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {skills.map((skill) => (
            <SkillChip key={skill} label={skill} />
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}


function Skills() {
  return (
    <Box sx={{ width: '70%', mt: 10 }}>
      <Typography
        variant="h3"
        sx={{
          color: 'white',
          fontWeight: 300,
          mb: 6,
        }}
      >
        Technical Skills
      </Typography>

      <Grid container spacing={4} sx = {{mb:10}}>
        {skillSections.map((section) => (
          <Grid item xs={12} md={6} key={section.title}>
            <SkillCard
              title={section.title}
              skills={section.skills}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

const projects = [
    {
        title: "Zaipu",
        image: zaipu,
        tech: [
            "React.tsx",
            "Material UI",
            "MongoDB",
            "Graph.js",
            "Mongoose",
            "Flask",
            "Python",
        ],
        description: [
        "Built a full-stack financial analytics platform enabling users to track transactions and forecast expenses using Python-based models.",
        "Developed an interactive dashboard with Graph.js and Material-UI to visualize real-time financial data.",
        "Implemented secure authentication and optimized API performance to ensure scalability and data protection.",
        ],
        github: "github.com/jerryxiao14/Zaipu",
    },
    {
        title: "Fake Stack Overflow",
        image: FakeSO,
        tech: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "JWT",
            "REST APIs",
        ],
        description: ["Developed a full-stack Q&A platform inspired by Stack Overflow with user authentication and role-based access control.",
        "Implemented question posting, answers, voting, and tagging using RESTful APIs.",
        "Designed a scalable MongoDB schema and optimized query performance for high-volume interactions."],
        github: "https://github.com/jerryxiao14/StackOverflow"
    }
]

function ProjectCard({project}){
    return (
        <Card
            sx = {{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#111",
                color: "white",
                borderRadius: 3,
                border: "1px solid #222",
                transition: "transform 0.3s ease",
                "&:hover": {
                    transform: "translateY(-6px)",
                },
            }}
        >
            <CardMedia
                component = "img"
                height = "200"
                image = {project.image}
                alt = {project.title}
                sx = {{
                    objectFit: "cover"
                }}
            />

            <CardContent
                sx = {{
                    flexGrow: 1
                }}
            >
                <Typography
                    variant = "h5"
                    sx = {{
                        mb:1,
                    }}
                >
                    {project.title}
                </Typography>

                <Stack
                    direction = "row"
                    spacing = {1}
                    flexWrap="wrap"
                    sx = {{
                        mb:2
                    }}
                >
                    {project.tech.map((tech,i)=>(
                        <Chip
                            key = {i}
                            label = {tech}
                            size = "small"
                            sx = {{
                                backgroundColor: "#222",
                                color: "white",
                                mb:1,
                            }}
                        />
                    ))}

                </Stack>
                
                {project.description.map((line, i) => (
                    <Typography
                        key={i}
                        sx={{
                        fontSize: "14px",
                        color: "#ccc",
                        mb: 1,
                        }}
                    >
                        • {line}
                    </Typography>
                ))}

            </CardContent>
            
            <CardActions
                sx = {{
                    p:2
                }}
            >
                <Button
                    href = {project.github}
                    target = "_blank"
                    startIcon = {<GitHub />}
                    sx = {{
                        color: "white",
                        border: "1px solid white",
                        borderRadius: 10,
                        px: 2, 
                        "&:hover": {
                            backgroundColor: "#222",
                        },
                    }}
                >
                    Code
                </Button>
            </CardActions>
        </Card>
    )
}

function ProjectOverview({refProp}){
    return (
        <Box
            ref={refProp}
            id="projects-section"
            sx = {{
                width: "70%",
                mx: "auto",
                mt: 10,
                //border: '2px solid blue'
                
            }}
        >
            <Typography
                variant = "h3"
                sx = {{
                    mb: 6,
                    textTransform: "uppercase",
                    color: "white",
                }}
            >
                Projects
            </Typography>

            <Grid
                container 
                spacing = {15}
                alignItems='stretch'
            >
                {projects.map((project,index)=>(
                    <Grid item xs = {12} sm = {6} md = {6} key = {index}
                    >
                        <ProjectCard project = {project}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

function GitHubCTA() {
  return (
    <Box
      sx={{
        width: "70%",
        mx: "auto",
        mt: 10,
        mb: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // left-align content
      }}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          fontSize: "22px",
          color: "grey",
          mb: 1,
          letterSpacing: "0.08em",
        }}
      >
        Want to see more of my work?
      </Typography>

      <Typography
        sx={{
          fontSize: "42px",
          fontWeight: 300,
          color: "white",
          mb: 3,
        }}
      >
        Explore My GitHub
      </Typography>

      <Button
        href="https://github.com/jerryxiao14"
        target="_blank"
        startIcon={<GitHub />}
        sx={{
          color: "white",
          border: "1px solid white",
          borderRadius: 10,
          px: 4,
          py: 1.5,
          fontSize: "16px",
          "&:hover": {
            backgroundColor: "#222",
          },
        }}
      >
        View GitHub
      </Button>
    </Box>
  );
}


function AboutContact(){
    return (
        <Box>
            <Box
                sx={{
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Typography
                    sx={{
                        textTransform: 'uppercase',
                        fontSize: '25px',
                        mb: 5,
                        mt: 20,
                        color: "white",
                    }}
                >
                    Interested in collaborating?
                </Typography>

                <Typography
                    sx={{
                        textTransform: 'uppercase',
                        fontSize: '125px',
                        mb: 5,
                        color: "white",
                    }}
                >
                    Let’s Make It Happen
                </Typography>

                <Button
                    component={RouterLink}
                    to="/contact"
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
        </Box>
    );
}
export default function AboutMe(){

    const projectsRef = useRef(null);
    const location = useLocation();

    // Scroll to Projects if URL state or hash indicates
    useEffect(() => {
        if (location.hash === "#projects" && projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <Box 
            sx = 
                {{
                    display:'flex',  
                    alignItems:'center',
                    //border:'2px solid blue',
                    width: '100%',
                    flexDirection: 'column',
                }}
        >
            <Header />
            <Divider mtopMargin={20}/>
            <Description />
            <Divider mtopMargin = {20}/>
            <Skills/>
            <Divider mtopmargin = {10}/>
            <ProjectOverview refProp={projectsRef}/>
            <GitHubCTA/>
            <Divider mtopMargin = {10}/>
            <AboutContact/>
            <Divider mtopMargin = {20}/>
        </Box>
    )
}