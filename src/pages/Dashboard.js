import { Box } from '@mui/material'
import React, {useState, useEffect} from 'react'
import DashboardNavbar from '../components/DashboardNavbar'
import { useLocation } from 'react-router-dom';
import DashboardContent from '../components/DashboardContent';
function Dashboard() {
  //Dashboard derives searchResult from the local storage itself.
  const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const savedSearchResult = localStorage.getItem('searchResult');
        if (savedSearchResult) {
            setSearchResult(JSON.parse(savedSearchResult));
            console.log(searchResult);
        } 
    }, []);
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
        <DashboardContent searchResult={searchResult}/>
      </Box>
    </>
  )
}

export default Dashboard