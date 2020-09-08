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
    bottomBar: {
    width: width,
    position: "absolute",
    bottom: 0,
    textAlign: "center"
    },
    bottomNavLink: {
      marginLeft: width/3,
      marginRight: width/3,
      
    }
  });
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (

    // <BottomNavigation
    //   value={value}
    //   onChange={(event, newValue) => {
    //     setValue(newValue);
    //   }}
    //   showLabels
    //   className={classes.bottomNav}
    // >
    <div className={classes.bottomBar}>
        <span className={classes.bottomNavLink}><NavLink exact to="/mypage"><FaceIcon /></NavLink></span>
        <span className={classes.bottomNavLink}><NavLink exact to="/"><HomeIcon /></NavLink></span>
        <span className={classes.bottomNavLink}><NavLink exact to="/crew"><PeopleOutlineIcon /></NavLink></span>
    </div>
      
      
      // {/* 
      // <BottomNavigationAction label="My" icon={<FaceIcon />} />
      // <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      // <BottomNavigationAction label="Crew" icon={<PeopleOutlineIcon />} />
      //  */}
    // </BottomNavigation>
  );
}

