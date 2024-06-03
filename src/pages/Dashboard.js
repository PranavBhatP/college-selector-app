import { Box } from '@mui/material'
import React from 'react'
import DashboardNavbar from '../components/DashboardNavbar'
function Dashboard() {
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
        <DashboardNavbar/>
      </Box>
    </>
  )
}

export default Dashboard