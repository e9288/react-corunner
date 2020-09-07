import React, { Fragment } from "react";

import useWindowDimensions from '../hooks/UseWindowDimensions';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from "@material-ui/core/colors";

export const Base = (props) => {
	const { height, width } = useWindowDimensions();
  const useStyles = makeStyles({
    base: {
		width: width,
		height: 10,
    position: "relative",
		top: 0,
		
    },
	});
	const classes = useStyles();

	return (
		<Fragment>
				<div className={classes.base}>
          this is base
          <br />
          mypage base
				</div>
		</Fragment>
	);
}

export default Base;