import React from 'react';
import './NavigationItems.css';
import NavigationItem from 'NavigationItem/NavigationItem';

function navigationItems(props) {
    return (
        <ul className='NavigationItems'>
            <NavigationItem link='/' active>Burger Builder</NavigationItem>
            <NavigationItem link='/' active>Checkout</NavigationItem>
        </ul>
    );
}

export default navigationItems;