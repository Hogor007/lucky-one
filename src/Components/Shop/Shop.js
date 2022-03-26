import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import { ImCross } from 'react-icons/im'
import Modal from 'react-modal';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



//Modal styling
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const Shop = () => {
    const [bikes, setBikes] = useState([]);
    const [bikeArr, setBikeArr] = useState([]);
    const [drawItem, setDrawItem] = useState({})
    const MySwal = withReactContent(Swal)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])

    let selectedBike = [];
    const handleAddToCart = props => {

    }
    const reset = () => {
        setBikeArr([])
    }

    const [modalIsOpen, setIsOpen] = React.useState(false);
    //Modal open
    function openModal() {
        setIsOpen(true);
    }
    // Modal close
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='container'>
            <div className=" shop-grid">
                <div className="grid">
                    {
                        bikes.map(bike => <Product handleAddToCart={handleAddToCart} key={bike.id} bike={bike}></Product>)
                    }
                </div>
                <div className="cart">
                    <div className="sticky">
                        <h4 className='text-center cartlist'>My Cart</h4>
                        <div className="cart-info">
                            {

                            }
                            <div className="text-center group">

                                {/* Modal body-----------------> */}
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal">
                                    <ImCross className='cross' onClick={closeModal}></ImCross>
                                    <img className='modal-image' src={drawItem.img} alt="" />
                                    <h3 className='modal-header py-0 mb-0'>{drawItem.name}</h3>
                                    <h4 className='modal-header py-2'>${drawItem.price}</h4>
                                    <button className='order-now btn my-3' onClick={closeModal}>Order Now</button>
                                </Modal>
                                {/* ========================== */}
                                {/* Lucky Draw and Reset button */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;