import { Box, Stack } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';


export default function Content() {
  return (
    <Box sx = {{textAlign: 'center', display:"flex", flexDirection:"column", alignItems:'center',pt:'250px', px: '50px'}}>
        <Typography variant="h2"sx = {{fontWeight:'bold'}} gutterBottom>
            Welcome to <span style={{color:"#0858AA"}}>CollegeGo!</span>
        </Typography>
        <Typography variant="h5" sx = {{color:"black"}}>
            The one place to find your college, at the click of a button!
        </Typography>
        <SchoolIcon sx={{ fontSize: 80, marginTop: "20px" }} />
        
    </Box>
  )
}
