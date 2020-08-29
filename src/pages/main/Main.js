import React, { Fragment } from 'react';
import { useState, useEffect } from 'react'

import axios from 'axios';
import { SearchBar } from '../../components/common/CustomizedInputBase'

export const Main = (props) => {

	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const fetch_main_data = async () => {
		try {
				const response = await axios.get(
				'/index.json'
				);

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
						<SearchBar />
						{/* 
							{
									campain_list.map(data =>
										<Campain data={data} key={data.product_code} />
									)
							}

							{
								event_bnr_list.map(data =>
									<Event data={data} key={data.seq_no} />
							)}

							{
								deal_bnr_list.map(data =>
									<BrandDeal data={data} key={data.seq_no} />   
								
							)}

							{
								new_bnr_list.map(data => 
									<New data={data} key={data.seq_no} />    
							)}
						*/}
				</div>
			);
} 

    
