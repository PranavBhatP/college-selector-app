import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import SearchComponent from '../components/SearchComponent'
function Home() {
  return (
    <>
      <Box sx = {{
          minHeight: '100vh',
          // py:5,
          // px:5,
          display: 'flex',
          flexDirection: 'column',
          // background: 'linear-gradient(to bottom, rgba(0, 0, 255, 0.8) 0%, rgba(0, 0, 255, 0) 20%)',
      }}
      >
        <Navbar/>
        <Content/>
      </Box>
      <Box sx = {{
        // py:5,
        // px:5,
        display: 'flex',
        flexDirection: 'column',
        // background: 'linear-gradient(to bottom, rgba(0, 0, 255, 0.8) 0%, rgba(0, 0, 255, 0) 20%)',
      }}>
        <SearchComponent/>
      </Box>
    </>
  )
}

export default Home