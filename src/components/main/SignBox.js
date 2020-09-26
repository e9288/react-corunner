import React from 'react';
import {NavLink} from 'react-router-dom';
import './SignBox.css';

const SignBox = () => {
    return (
		<div className='signBox-root'>
            <div className='signBtn'>
                <button><NavLink exact to='/signIn'>Sign In</NavLink></button>
            </div>
            <div className='signBtn'>
                <button><NavLink exact to='/signUp'>Sign Up</NavLink></button>
            </div>
        </div>
	);
}

export default SignBox;