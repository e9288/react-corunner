import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import {NavLink} from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import FaceIcon from '@material-ui/icons/Face';

import useWindowDimensions from '../hooks/UseWindowDimensions';

export default function SimpleBottomNavigation() {
  
  const { height, width } = useWindowDimensions();
  const useStyles = makeStyles({
    bottomNav: {
    width: width,
    position: "absolute",
    bottom: 0,
    },
  });
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.bottomNav}
    >

{/*       
      <NavLink exact to="/mypage"><BottomNavigationAction label="My" icon={<FaceIcon />} /></NavLink>
      <NavLink exact to="/"><BottomNavigationAction label="Home" icon={<HomeIcon />} /></NavLink>
      <NavLink exact to="/crew"><BottomNavigationAction label="Crew" icon={<PeopleOutlineIcon />} /></NavLink>
       */}
      
      
      
      <BottomNavigationAction label="My" icon={<FaceIcon />} component={NavLink} exact to="/mypage" />
      <BottomNavigationAction label="Home" icon={<HomeIcon />} component={NavLink} exact to="/" />
      <BottomNavigationAction label="Crew" icon={<PeopleOutlineIcon />} component={NavLink} exact to="/crew" /> 

    </BottomNavigation>
  );
}

