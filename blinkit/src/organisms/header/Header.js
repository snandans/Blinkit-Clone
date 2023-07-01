import React from 'react';
import '../../styles/style.css'
import './Header.module.css';
import { Navbar } from '../../pages/home/organisms/navbar';
import { CartInfo } from './molecules/cartInfo';
import { DeliveryInfo } from './molecules/deliveryInfo';

function Header() {
  return (
    <header>
      <nav className="navBar flex flex__center__cross-axis">
        <DeliveryInfo />
        <CartInfo />
      </nav>
      <Navbar />
    </header>
  );
}
export default Header;
