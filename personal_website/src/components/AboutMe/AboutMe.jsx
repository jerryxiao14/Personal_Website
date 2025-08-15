import React from 'react'
import {Box, Typography, Avatar} from '@mui/material'

import JerryX from './images/jerryx.jpg'


export default function AboutMe(){
    return (
        <Box sx = {{borderColor:'red', border:1}}>
            <Typography>Hi</Typography>
            <Box sx = {{borderColor:'red', border:1}}>
                <Avatar sx = {{width:100, height:100}} src = {JerryX}/>
            </Box>
        </Box>
    )
}