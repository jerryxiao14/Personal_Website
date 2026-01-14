import React from 'react'
import {Box, Typography, Avatar, Chip, Grid, Card, CardContent} from '@mui/material'

import JerryX from './images/jerryx.jpg'
import { LocationOn } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { Phone } from '@mui/icons-material'

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

      <Grid container spacing={4}>
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



export default function AboutMe(){
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
        </Box>
    )
}