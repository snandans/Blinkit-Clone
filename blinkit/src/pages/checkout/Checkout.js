import React from 'react'
import { getCartItems } from './helpers/checkout.bill'
import { useSelector } from 'react-redux';
import useFetchData from '../../organisms/helpers/useFetchData';
import { DisplayCartItems } from './organisms/displayCartItems';

function Checkout() {
  const count = useSelector((state) => state.countReducer);
  const items = useFetchData("items");
  const { displayCheckoutItems, cost } = getCartItems(items, count, 0);

  return (
    <ul className='flex flex__column flex__center__cross-axis flex__center__main-axis'>
      <DisplayCartItems displayCheckoutItems={displayCheckoutItems} cost={cost} />
    </ul>
  )
}

export default Checkout