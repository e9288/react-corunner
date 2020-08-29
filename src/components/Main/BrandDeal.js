import React from 'react';

export const BrandDeal = (props) => {
    return (
        
            <article className='brand_item'>
                    <div className='fade_dark'></div>
                    <img src={props.data.img_url} alt=''/>
                    <h2 className='deal_name'>
                        {props.data.bnr_sbj}<br/>
                        {props.data.bnr_ctnt}
                    </h2>
                    <p className='price'>300,000</p>
                    <span className='discount_value'>39%</span>
            </article>
    );
}