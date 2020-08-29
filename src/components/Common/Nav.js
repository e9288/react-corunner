import React from "react";

export const Nav = (props) => {
    return (
        <nav>
            <ul className='nav_menu'>
                <li className='home_link'><a href='#'></a><img src={process.env.PUBLIC_URL + '/img/all/home_btn2.png'} alt=''/></li>
                <li className='review_write_link'><a href='#'></a><img src={process.env.PUBLIC_URL + '/img/all/review_write_btn2.png'} alt=''/></li>
                <li className='product_list_link'><a href='#'></a><img src={process.env.PUBLIC_URL + '/img/all/product_btn2.png'} alt=''/></li>
                <li className='search_link'><a href='#'></a><img src={process.env.PUBLIC_URL + '/img/all/search_btn2.png'} alt=''/></li>
                <li className='mypage_link'><a href='#'></a><img src={process.env.PUBLIC_URL + '/img/all/user_btn2.png'} alt=''/></li>
            </ul>
        </nav>
    );
}