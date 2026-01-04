import React from 'react'
import {Box, Typography, Avatar} from '@mui/material'

import JerryX from './images/jerryx.jpg'


export default function AboutMe(){
    return (
        <Box sx = {{display:'flex',  alignItems:'center',border:'2px solid blue'}}>
            {/* Box of top about me section, contains left avatar and right text */}
            {/* Left: Avatar */}
            <Box 
                sx=
                {{ 
                    border: '5px solid red', 
                }}
            >
                <Avatar sx = {{width:200, height:200}} src = {JerryX}/>
            </Box>
        </Box>
    )
}