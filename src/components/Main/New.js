import React from 'react';

export const New = (props) => {
    return (
        
                    <div className='slider_item'>
                        <div className='img_wrap'>
                            <img src={props.data.img_url} alt=''/>
                        </div>
                        <h2 className='item_name'>{props.data.bnr_sbj}</h2>
                        <p className='item_desc'>
                            {props.data.bnr_ctnt}
                        </p>
                        <a href={props.data.img_lnk_url}>바로가기</a>
                    </div>
    );
}