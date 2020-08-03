import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

function logo(props) {
    return (
        <div className={'Logo'}>
            <img src={burgerLogo} alt='MyBurger'/>
        </div>
    );
}

export default logo;