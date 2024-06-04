import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

const CollegeCard = ({ searchResult }) => {
    const asset = searchResult[0];
    const [imgExists, setImgExists] = useState(true);
    let imgUrl;
    //Handles API fallbacks and generate a card.
    const fetchUrl = () => {
        try {
            imgUrl = asset.domains[0];
            setImgExists(true);
        } catch (e) {
            setImgExists(false);
        }
    };

    useEffect(() => {
        fetchUrl();
    }, [asset]);

    return (
        <Box sx={{ minWidth: '100px', width: '50%', display: 'flex', flexDirection: 'column', border: '1px solid lightgray', borderRadius: '8px', overflow: 'hidden', boxShadow: 2, mb: 2 }}>
            <Box sx={{ height: '150px', backgroundColor: imgExists ? 'transparent' : 'lightgray', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {imgExists ? (
                    <img src={`https://logo.clearbit.com/${imgUrl}`} alt="College Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                ) : (
                    <Typography variant="body2" color="text.secondary">Image Not Found</Typography>
                )}
            </Box>
            <Box sx={{ p: 2 }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {asset.name}
                </Typography>
                <Typography variant="p" component="div" sx={{ color:"gray" }}>
                    {asset.country}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                <Typography variant="body2" color="text.secondary">
                    SAVED!
                </Typography>
            </Box>
        </Box>
    );
};

export default CollegeCard;
