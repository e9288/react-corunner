import React, { Fragment } from 'react';

export const Campain = (props) => {
    return (
        <Fragment>
            <article className='product_slider_item swiper-slide'>
                <h2 className='due_date'>D-{props.data.d_day}</h2>
                <p className='apply_status'>
                    <span className='apply_count'>신청 <em>{props.data.cnt_apply}</em></span><span className='divider'>/</span><span className='total_count'>모집 <em>{props.data.quantity}</em></span>
                </p>
                <img src={props.data.product_img} className='product_detail_img'alt=''/>
                <p className='product_title'>{props.data.product_name}</p>
                <img src='../img/common/stokke_brand_detail.png' className='product_brand_category_detail' alt=''/>
                <img src={props.data.brand_img} alt='' className='product_brand_category'/>
            </article>
        </Fragment>
    );
}