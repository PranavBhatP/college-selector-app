import { Autocomplete, Box, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

function SearchComponent() {
  const [search, setSearch] = useState('');
  const [univList, setUnivList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [errorText, setErrorText] = useState('');

  const fetchUniversities = async (query) => {
    try {
      const response = await axios.get(`http://universities.hipolabs.com/search?name=${query}`);
      const result = response.data.map((element, index) => ({
        id: index + 1,
        label: element.name
      }));
      setUnivList(result);
    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorText('Unable to fetch the list.');
    }
  };

  const debouncedFetch = debounce(fetchUniversities, 500); // I'm using 500ms delay for debounce of the API calls, to ensure better performance.

  useEffect(() => {
    if (search) {
      debouncedFetch(search);
    } else {
      setUnivList([]);
    }

    // Cleanup the debounce on unmount
    return () => {
      debouncedFetch.cancel();
    };
  }, [search]);
  const handleSearchChange = (event, value) => {
    setSearch(value);
    console.log(search);
  };

//   const handleCollegeSelector = (e) => {
//     // Your handler logic here
//   };

  return (
    <Box sx={{ borderTop: '1px solid lightgray', textAlign: 'center', py: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" sx={{ color: 'black', fontWeight: 'bold' }}>College Finder 👇</Typography>
      <Autocomplete
        disablePortal
        id="univ-list"
        options={univList}
        getOptionLabel={(option) => option.label}
        noOptionsText="Your college could not be found"
        sx={{ width: 700, py: '50px' }}
        renderOption={(props, option) => (
          <Box component="li" {...props} key={option.id}>
            {option.label}
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="College Name" />}
        onInputChange={handleSearchChange}
      />
      <Box sx={{ height: 'auto', width: 'auto', py: '20px' }}>
        {searchResult.length > 0 ? (<Typography sx={{ textAlign: 'center' }}>Search successful!</Typography>) : (<Typography>{errorText}</Typography>)}
      </Box>
    </Box>
  );
}

export default SearchComponent;
