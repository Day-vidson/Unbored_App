import {
    Route,
    NavLink,
    HashRouter,
    Routes
} from "react-router-dom";

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Activites() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction component={NavLink} to="/listOfJokes" label="ChuckNorris" icon={"🤠"}/>
        <BottomNavigationAction component={NavLink} to="/bored" label="Task" icon={<FavoriteIcon />}/>
        <BottomNavigationAction component={NavLink} to="/post" label="Post" icon={<LocationOnIcon />}/>
        <BottomNavigationAction component={NavLink} to="/post" label="Post" icon={<LocationOnIcon />}/>
        <BottomNavigationAction component={NavLink} to="/post" label="Post" icon={<LocationOnIcon />}/>
      </BottomNavigation>
    </Box>
  );
}

// function Activites() {
    // return(
    //     <ul className="Activities">
    //         <li><NavLink to="/listOfJokes">🤠</NavLink></li>
    //         <li><NavLink to="/bored">✅</NavLink></li>
    //         <li><NavLink to="/post">⏹</NavLink></li>
    //         <li><NavLink to="chuckNorris">🤠</NavLink></li>
    //         <li><NavLink to="chuckNorris">🤠</NavLink></li>
    //         <li><NavLink to="chuckNorris">🤠</NavLink></li>
    //         <li><NavLink to="chuckNorris">🤠</NavLink></li>

    //     </ul>
    // )

    
// }
