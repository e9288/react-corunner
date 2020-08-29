import React from "react";

export const Header = (props) => {
    return (
        <header className='sub_header_bebecam'>
            <div className='inner'>
                <h2 className='user_name'>{props.frcsCustNo}</h2>
                <h4>우리 아기가 잘 있는지 확인해보세요</h4>
                <div className='bebecam_alram'>
                    <span className='alram_icon'>
                            <img src='../img/common/alram_icon.png' alt=''/>
                    </span>
                    <p className='bebecam_logo'>
                            <img src='../img/all/bebecam_logo.svg' alt=''/>
                            <span className='txt_logo'></span>
                    </p>
                </div>
            </div>
        </header>
    );
}