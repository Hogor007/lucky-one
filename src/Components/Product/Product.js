import React from 'react';
import { Card } from 'react-bootstrap';
import { BsCartPlus } from 'react-icons/bs'
import './Product.css'

const Product = ({ bike, handleAddToCart }) => {
    const { img, name, price } = bike;
    return (
        <div className="single-card">
            <Card className='mx-auto phone-card'>
                <img src={img} alt="" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <b>${price}</b>
                    </Card.Text>
                    <button className='button btn button-size' onClick={() => handleAddToCart(bike)}>
                        <p className='btn-text'>Add to Cart</p><BsCartPlus></BsCartPlus>
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;