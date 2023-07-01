import React from 'react'
import Cart from '../../../../images/cart.png';
import Image from '../../../../atoms/Image';
import Button from '../../../../atoms/Button';
import { myCart } from '../../constants/header.myCart';
import { Link } from 'react-router-dom';

function CartInfo() {
    return (
        <div className="navBar__right flex flex__center__cross-axis">
            <p>Login</p>
            <Link to ="/checkout">
            <Button styles="btn flex flex__center__cross-axis">
                <Image styles="btn__icon" src={Cart} alt="" />
                <p className="btn__text">{myCart}</p>
                </Button>
            </Link>
        </div>
    )
}

export default CartInfo