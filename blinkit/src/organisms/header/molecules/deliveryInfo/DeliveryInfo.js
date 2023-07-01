import React from 'react'
import { deliveryLocation, deliveryTime } from '../../constants/header.deliveryDescription';
import Logo from '../../../../images/blinkit.webp';
import Image from '../../../../atoms/Image';

export default function DeliveryInfo() {
    return (
        <div className="navBar__left flex flex__center__cross-axis">
            <Image styles="navBar__left__icon" src={Logo} alt="" />
            <div className="navBar__left__content" >
                <p><strong>{deliveryTime}</strong></p>
                <p>{deliveryLocation}</p>
            </div>
        </div>
    )
}
