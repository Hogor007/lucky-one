import React from 'react';
import './Cart.css'
import { MdDeleteForever } from 'react-icons/md'

const Cart = ({ bike }) => {
    return (
        <div className='cart-info-parent'>
            <img className='cart-image' src={bike.img} alt="" />
            <h6>{bike.name}</h6>
            <MdDeleteForever className='delete-icon'></MdDeleteForever>
        </div>
    );
};

export default Cart;