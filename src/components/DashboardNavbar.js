import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText, ListItemButton, Stack, Link } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { SupervisedUserCircleRounded, VerifiedUserOutlined } from '@mui/icons-material';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // const drawer = (
  //   <div>
  //     <List>
  //       <ListItem disablePadding>
  //         <ListItemButton>
  //             <ListItemText sx = {{color:"black"}}primary="GET STARTED" />
  //         </ListItemButton>
  //       </ListItem>
  //       <ListItem>  
  //           <ListItemButton disablePadding>
  //               <ListItemText primary="DASHBOARD" />
  //           </ListItemButton>
  //       </ListItem>
  //     </List>
  //   </div>
  // );

  return (
    <div>
      <AppBar position="static" sx = {{backgroundColor: "transparent", boxShadow :'none', borderBottom:'1px solid gray'}}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "black" }}>
            <SchoolIcon sx={{ fontSize: 25, marginRight: "5px"}} />
            CollegeGo
          </Typography>
          <Stack spacing={{ xs: 2, sm:2, lg: 2 }} direction="row" useFlexGap flexWrap="wrap">
            <Button href = '/' sx = {{color: "white", backgroundColor: "black",'&:hover': { backgroundColor: '#555' }}}>HOME</Button>
            <Typography variant='h6'sx={{ color: "black", border: "2px solid", borderRadius: '5px', p:0.5}}>
                <VerifiedUserOutlined sx={{ color:"black", fontSize: 20, mt: "5px"}}/>
                User1
            </Typography>            
        </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
