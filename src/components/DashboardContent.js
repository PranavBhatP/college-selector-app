import { Grid, Typography, Box } from '@mui/material';
import React from 'react';

const DashboardContent = ({ searchResult }) => {
    //Main content display in the dashboard, to edit the search results we can alter the search.
    const hasData = searchResult && searchResult.length > 0;
    const hasDomains = hasData && searchResult[0].domains && searchResult[0].domains.length > 0;
    
    return (
        <Box sx={{ p: 4, m: 4, display: 'flex', border: '2px solid black', borderRadius: '5px' }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
                        Dashboard
                    </Typography>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                                User Name
                            </Typography>
                            <Typography>
                                User1
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                                College Name
                            </Typography>
                            <Typography>
                                {hasData ? searchResult[0].name : 'No data found'}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                                Country
                            </Typography>
                            <Typography>
                                {hasData ? searchResult[0].country : 'No data found'}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        {hasDomains ? (
                            <img src={`https://logo.clearbit.com/${searchResult[0].domains[0]}`} alt="Institute Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        ) : (
                            <Typography>Image not found</Typography>
                        )}
                        <Typography>Institute Logo</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashboardContent;
