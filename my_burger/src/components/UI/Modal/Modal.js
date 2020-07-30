import React from 'react';
import './Modal.css';

function modal(props) {
    return (
        <div className='Modal'>
            {props.children}
        </div>
    );
}

export default modal;