import React, { Fragment } from 'react';

export const Event = (props) => {
    return (
        <Fragment>
            <article className='event_item'>
                    <img src={props.data.img_url} alt=''/>
            </article>
        </Fragment>
    );
}