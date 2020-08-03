import React from 'react';
import './Backdrop.css'
function backdrop(props) {
    return (
        props.show ? <div className='Backdrop' onClick={props.clicked}></div> : null
    );
}

export default backdrop;