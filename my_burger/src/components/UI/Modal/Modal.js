import React from 'react';
import './Modal.css';
import Auxiliary from '../../../HOC/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

function modal(props) {
    return (
        <Auxiliary>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div
        className='Modal'
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}
    >
        {props.children}
    </div>
        </Auxiliary>
);
}

export default modal;