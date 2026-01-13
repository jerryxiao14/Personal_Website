import React from 'react'
import {Box, Typography, Avatar} from '@mui/material'

import JerryX from './images/jerryx.jpg'
import { LocationOn } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { Phone } from '@mui/icons-material'


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
        </Box>
    )
}