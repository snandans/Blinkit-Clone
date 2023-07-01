import React, { Fragment } from 'react'
import Image from '../../../../../../../../../atoms/Image'

function CardDescription({ imageUrl, productName }) {
  return (
    <Fragment>
      <div>
        <div className="container__btn flex__center__main-axis flex__center__cross-axis">10% off</div>
        <Image styles="container__icon" src={imageUrl} alt="" />
      </div>
      <p className="para2"> Sourced at 5 AM</p>
      <p className="para1 strong">{productName}</p>
      <p className="para1 gray">1 kg</p>
    </Fragment>
  )
}

export default CardDescription