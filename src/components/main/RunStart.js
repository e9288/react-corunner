import React, { Fragment } from 'react';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import './RunStart.css';
const RunStart = () => {
  /*
  const { height, width } = useWindowDimensions();
  const useStyles = makeStyles((theme) => ({
    
  }));
  const classes = useStyles();
  */

	return (
		<div className='runStart-root'>
      <br />
      <br />
      <br />
      <DirectionsRun fontSize='large'></DirectionsRun>
			<h2>RUN START</h2>
    </div>
	);
}

export default RunStart;