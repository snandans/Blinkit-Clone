import React, { useState } from 'react';
import CardDescription from './molecules/CardDescription';
import CardAction from './organisms/CardAction';

function Card({
    element: {
        id,
        image_url,
        product_name,
        discount_price,
        price
    } }) {

    return (
        <div key={id} className="card flex flex__column flex__center__cross-axis">
            <CardDescription imageUrl={image_url} productName={product_name}/>
            <CardAction discountPrice={discount_price} price={price} id={id} />
        </div>
    )
}

export default Card