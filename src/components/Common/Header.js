import React, { Fragment } from "react";

import useWindowDimensions from '../hooks/UseWindowDimensions';
import { makeStyles } from '@material-ui/core/styles';

export const Header = (props) => {
	const { height, width } = useWindowDimensions();
  const useStyles = makeStyles({
    header: {
		width: width,
		height: height * 2/15,
    position: "relative",
		top: 0,
		backgroundImage: 'url("/img/header_img.jpg")',
		backgroundSize: "cover",
		// opacity: 0.7
    },
	});
	const classes = useStyles();

	return (
		<Fragment>
			<header>
				<div className={classes.header}>
				</div>
			</header>
		</Fragment>
	);
}

export default Header;