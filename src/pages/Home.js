import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import SearchComponent from '../components/SearchComponent'
function Home() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const savedSearchResult = localStorage.getItem('searchResult');
    if (savedSearchResult) {
        setSearchResult(JSON.parse(savedSearchResult));
    }
  }, []); // Retreieve search results from the localStorage to ensure persistence.
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
        <Navbar searchResult = {searchResult}/>
        <Content/>
      </Box>
      <Box sx = {{
        // py:5,
        // px:5,
        display: 'flex',
        flexDirection: 'column',
        // background: 'linear-gradient(to bottom, rgba(0, 0, 255, 0.8) 0%, rgba(0, 0, 255, 0) 20%)',
      }}>
        <SearchComponent searchResult={searchResult} setSearchResult = {setSearchResult}/>
      </Box>
    </>
  )
}

export default Home