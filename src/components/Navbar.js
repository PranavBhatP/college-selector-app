import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText, ListItemButton, Stack } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { SupervisedUserCircleRounded, VerifiedUserOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ searchResult }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); //Responsive design for mobile devices.
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };  
  const handleNavigation = (path) => {
      navigate(path);
  };
  
  const drawer = (
    <div>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigation('#search')} sx={{ color: 'black' }}>
            <ListItemText primary="GET STARTED" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigation('/dashboard')} sx={{ color: 'black' }}>
            <ListItemText primary="DASHBOARD" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      <AppBar position="static" sx = {{backgroundColor: "transparent", boxShadow :'none', borderBottom:'1px solid gray'}}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "black" }}>
            <SchoolIcon sx={{ fontSize: 25, marginRight: "5px"}} />
            CollegeGo
          </Typography>
          {isMobile ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon sx = {{color:"black"}}/>
            </IconButton>
          ) : (
            <Stack spacing={{ sm:2, lg: 2 }} direction="row" useFlexGap flexWrap="wrap">
                <Button href = '#search' variant = "contained" sx = {{color: "white", backgroundColor: "black", '&:hover': { backgroundColor: '#555' }}}>GET STARTED</Button>
                <Button 
                  variant = "contained" 
                  sx = {{color: "white", backgroundColor: "black", '&:hover': { backgroundColor: '#555' }}}
                  onClick={()=> {
                      navigate('/dashboard',{state: { searchResult: searchResult }});
                  }}
                >
                  DASHBOARD</Button>
                
                <Typography variant='h6'sx={{ color: "black", border: "2px solid", borderRadius: '5px', p:0.5}}>
                    <VerifiedUserOutlined sx={{ color:"black", fontSize: 20, mt: "5px"}}/>
                    User1
                </Typography>            
            </Stack>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
    </div>
  );
};

export default Navbar;
