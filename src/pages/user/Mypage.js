import React, { Fragment } from 'react';
import { useState, useEffect } from 'react'

import Base from '../../components/user/Base'

import axios from 'axios';

export const Mypage = (props) => {

	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const fetch_main_data = async () => {
		try {
			/*
				const response = await axios.get(
				'/index.json'
				);
			*/
				setLoading(true);
		} catch (e) {
				setError(e);
		}
	};
	useEffect(() => {
					fetch_main_data();
			}, []);
	
	if(loading == false)
			return (<Fragment />);
	if(loading == true)
			return (
				<div>
						<Base></Base>
				</div>
			);
} 

export default Mypage;