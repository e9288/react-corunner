import React, { Fragment } from 'react';
import { useState, useEffect } from 'react'

import axios from 'axios';
import { SearchBar } from '../../components/common/CustomizedInputBase';
import RunStart from '../../components/main/RunStart';

import './main.css';

export const Main = (props) => {

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
					<div className='main'>
						<SearchBar />
						<br />
						<br />
						<RunStart />
						{/* 
							{
									campain_list.map(data =>
										<Campain data={data} key={data.product_code} />
									)
							}
						*/}
				</div>
			);
} 

export default Main;