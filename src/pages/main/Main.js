import {Header} from '../../components/common/Header';
import {Nav} from '../../components/common/Nav';
import React, { Fragment } from 'react';
import { Campain } from '../../components/Main/Campain';
import { New } from '../../components/Main/New';
import { BrandDeal } from '../../components/Main/BrandDeal';
import { Event } from '../../components/Main/Event';
import { useState, useEffect } from 'react'

import axios from 'axios';

export const Main = (props) => {

	const [event_bnr_list, setEventBnrList] = useState(null);
	const [deal_bnr_list, setDealBnrList] = useState(null);
	const [campain_list, setCampainList] = useState(null);
	const [new_bnr_list, setNewBnrList] = useState(null);
	const [popup_bnr_list, setPopupBnrList] = useState(null);

	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const fetch_main_data = async () => {
		try {
				const response = await axios.get(
				'/index.json'
				);
				console.log(response.data.result.campain_list);
				setCampainList(response.data.result.campain_list);
				console.log(campain_list);
				setEventBnrList(response.data.result.event_bnr_list);
				setDealBnrList(response.data.result.deal_bnr_list);
				setNewBnrList(response.data.result.new_bnr_list);
				setPopupBnrList(response.data.result.popup_bnr_list);
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
					<Fragment>
							
							<div id='common_wrap'>
									<div className='bebecam_wrap'>
											<div className='sep_deco'></div>
											<div className='product_slider_wrap swiper-container'>
													<section className='product_slider swiper-wrapper'>
															{
																	campain_list.map(data =>
																			<Campain data={data} key={data.product_code} />
																	)
															}
													</section>
													<p className='slider_message'>스토케를 무료체험 해보세요</p>
													<div className='swiper-pagination'></div>
											</div>

											<section className='event_area'>
													<h2>EVENT <a href='#'>더보기 > </a></h2>
													{
															event_bnr_list.map(data =>
																	<Event data={data} key={data.seq_no} />
															)}
											</section>

											<section className='brand_area'>
													<h2>Brand Deal <a href='#'>더보기 > </a></h2>
													{
															deal_bnr_list.map(data =>
																	<BrandDeal data={data} key={data.seq_no} />   
															)
													}
											</section>

											<section className='new_item_area'>
													<h2>New <a href='#'>더보기 > </a></h2>
													<article className='new_item_slider'>
															{new_bnr_list.map(data => 
																	<New data={data} key={data.seq_no} />    
															)}
													</article>
											</section>
									</div>
							</div>
					</Fragment>
			);
} 

    
