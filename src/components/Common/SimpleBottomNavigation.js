import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import {NavLink} from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import FaceIcon from '@material-ui/icons/Face';

import useWindowDimensions from '../hooks/UseWindowDimensions';

import { withStyles } from '@material-ui/core/styles';

import './SimpleBottomNavigation.css';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

// const { height, width } = useWindowDimensions();
const { height, width } = getWindowDimensions();
const useStyles = makeStyles({
  /*
  bottomNav: {
  width: width,
  position: "absolute",
  bottom: 0,
  backgroundColor: "#CCCCCC",
  borderRadius: 20
  }
  */
});

/*
const useStyles = makeStyles({
  root: {
    width: 500,
  },
});
*/

function SimpleBottomNavigation() {
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
      <BottomNavigationAction className={classes.bottomNavAction} label="내정보" icon={<FaceIcon />} component={NavLink} exact to="/mypage" />
      <BottomNavigationAction className={classes.bottomNavAction} label="홈" icon={<HomeIcon />} component={NavLink} exact to="/" />
      <BottomNavigationAction className={classes.bottomNavAction} label="크루정보" icon={<PeopleOutlineIcon />} component={NavLink} exact to="/crew" /> 
    </BottomNavigation>
  );
}

export default withStyles(useStyles)(SimpleBottomNavigation);
// export default SimpleBottomNavigation;