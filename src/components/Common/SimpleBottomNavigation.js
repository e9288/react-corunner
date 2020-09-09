import React, { Fragment } from 'react';
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
    backgroundColor: "#CCCCCC",
    borderRadius: 20
    },
    bottomNavAction: {
      width: width * 1/3
    }
  });
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let pathname = window.location.pathname;
  
    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.bottomNav}
      >
        <BottomNavigationAction className={classes.bottomNavAction} label="내정보" icon={<FaceIcon />} component={NavLink} exact to="/mypage" />
        <BottomNavigationAction className={classes.bottomNavAction} label="홈" icon={<HomeIcon />} component={NavLink} exact to="/" />
        <BottomNavigationAction className={classes.bottomNavAction} label="크루정보" icon={<PeopleOutlineIcon />} component={NavLink} exact to="/crew" /> 
      </BottomNavigation>
    );

}

