import { NavLink } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TaskIcon from '@mui/icons-material/Task';

function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="Box">
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction component={NavLink} to="/jokes" label="Chuck Jokes" icon={"🤠"}  className="NavChuck"/>
        <BottomNavigationAction component={NavLink} to="/activities" label="Actvities" icon={<TaskIcon />}/>
        <BottomNavigationAction component={NavLink} to="/post" label="Post" icon={<LocationOnIcon />}/>
        <BottomNavigationAction component={NavLink} to="/post" label="Post" icon={<LocationOnIcon />}/>
        <BottomNavigationAction component={NavLink} to="/post" label="Post" icon={<LocationOnIcon />}/>
      </BottomNavigation>
    </Box>
  );
}

export default NavBar;