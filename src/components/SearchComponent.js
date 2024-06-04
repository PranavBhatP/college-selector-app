import { Autocomplete, Box, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import CollegeCard from './CollegeCard';

function SearchComponent({searchResult, setSearchResult}) {
    const [search, setSearch] = useState('');  
    const [searchBox, setSearchBox] = useState('');
    const [univList, setUnivList] = useState([]);
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
    //DEBOUNCE Implementation using 'lodash'.
  const debouncedFetch = debounce(fetchUniversities, 300); // I'm using 500ms delay for debounce of the API calls, to ensure better performance.

  useEffect(() => {
    if (searchBox) {
      debouncedFetch(searchBox);
    } else {
      setUnivList([]);
    }

    // Cleanup the debounce on unmount
    return () => {
      debouncedFetch.cancel();
    };
  }, [searchBox]);

  // Handles the searcbox raw text input.
  const handleSearchBoxChange = (event, value) => {
    setSearchBox(value);
  };
  //Set the search only after an option is finally selected
  const handleOptionChange = (event, value) => {
    if (value) {
      setSearch(value);
      console.log(search);
    }
  };

  const fetchResult = async (query) => {
    try {
        const response = await axios.get(`http://universities.hipolabs.com/search?name=${query}`);
        const result = response.data;
        setSearchResult(result);
        localStorage.setItem('searchResult', JSON.stringify(result));
    } catch (error) {
        console.error('Error fetching data:', error);
        setErrorText('Unable to fetch the list.');
    }
};

  useEffect(() => {
    if(search){
        fetchResult(search.label)
    } else {
        setSearchResult([])
    }
  }, [search]);

  

//   const handleCollegeSelector = (e) => {
//     // Your handler logic here
//   };

  return (
    <Box id = "search" sx={{ borderTop: '1px solid lightgray', textAlign: 'center', py: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
      <Typography variant="h3" sx={{ color: 'black', fontWeight: 'bold' }}>College Finder 👇</Typography>
      {/* Automcomplete componenet implementation */}
      <Autocomplete
        disablePortal
        id="univ-list"
        options={univList}
        getOptionLabel={(option) => option.label}
        noOptionsText="Your college could not be found"
        sx= {{ display: 'flex', minWidth: '300px', width: '80%', py: '40px'}}
        renderOption={(props, option) => (
          <Box component="li" {...props} key={option.id}>
            {option.label}
          </Box>
        )}
        isOptionEqualToValue={(option, value) => option.id === value.id && option.label === value.label}
        renderInput={(params) => <TextField {...params} label="College Name" />}
        onInputChange={handleSearchBoxChange}
        onChange={handleOptionChange}
      />
      <Box sx={{ height: 'auto', width: 'auto', py: '20px' }}>
        {searchResult.length > 0 ? (<Typography sx={{ textAlign: 'center' }}>Search successful!</Typography>) : (<Typography>{errorText}</Typography>)}
      </Box>
      {searchResult.length > 0 ? <CollegeCard searchResult = {searchResult}/> : <p>Select a college for it to show up..</p>}
    </Box>
  );
}

export default SearchComponent;
