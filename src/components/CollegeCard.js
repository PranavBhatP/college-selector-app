import React, { useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography, CardMedia } from '@mui/material';

const CollegeCard = ({ result }) => {
    const asset = result[0];
    const [imgExists, setImgExists] = useState(true);
    let imgUrl;
    const fetchUrl = () => {
        try{
            imgUrl = asset.domains[0]
            setImgExists(true);
        }catch (e) {
            setImgExists(false);
        }
    }
    
    return (
        <Card sx={{ minWidth: '100px', width: '50%', display:'flex', flexDirection:'column'}}>
        {imgExists ? (<CardMedia
            component="img"
            height="10px"
            width= "10px"
            image = {`http://www.google.com/s2/favicons?domain=www.${imgUrl}`}
            alt="Placeholder"
        />): (<p>Image Not Found</p>)}
        <CardContent>
            <Typography variant="h6" component="div">
            {asset.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {asset.country}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">SAVE</Button>
        </CardActions>
        </Card>
    );
};

export default CollegeCard;
